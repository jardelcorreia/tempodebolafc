export async function getNews(category: 'brasil' | 'internacional' | 'mercado' = 'brasil') {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY is not defined");
    }

    // Adiciona timestamp e força no-cache
    const timestamp = new Date().getTime();
    const cacheKey = Math.random().toString(36).substring(7);

    let params;
    switch (category) {
      case 'internacional':
        params = new URLSearchParams({
          resultType: 'articles',
          keyword: 'futebol internacional',
          keywordLoc: 'title,body', // Busca também no corpo
          lang: 'por',
          articlesSortBy: 'date',
          articlesCount: '100', // Aumenta para ter mais opções
          apiKey: apiKey,
          // Adiciona filtro de data mais recente (últimos 7 dias)
          dateStart: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          dateEnd: new Date().toISOString().split('T')[0]
        });
        break;
      case 'mercado':
        params = new URLSearchParams({
          resultType: 'articles',
          keyword: 'mercado da bola',
          keywordLoc: 'title,body',
          lang: 'por',
          articlesSortBy: 'date',
          articlesCount: '100',
          apiKey: apiKey,
          dateStart: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          dateEnd: new Date().toISOString().split('T')[0]
        });
        break;
      case 'brasil':
      default:
        params = new URLSearchParams({
          resultType: 'articles',
          keyword: 'futebol brasileiro OR brasileirão OR copa do brasil',
          keywordLoc: 'title,body',
          lang: 'por',
          articlesSortBy: 'date',
          articlesCount: '100',
          apiKey: apiKey,
          dateStart: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          dateEnd: new Date().toISOString().split('T')[0]
        });
        break;
    }

    const url = `https://newsapi.ai/api/v1/article/getArticles?${params.toString()}&_=${timestamp}&cache=${cacheKey}`;

    console.log('URL sendo chamada:', url);
    console.log('Timestamp da requisição:', new Date(timestamp).toLocaleString());

    // Headers para forçar bypass de cache
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    console.log('Resposta da API:', data);
    console.log('Total de artigos retornados pela API:', data.articles?.results?.length || 0);

    if (!data.articles || !data.articles.results) {
      console.log('Nenhum artigo encontrado na resposta');
      return [];
    }

    // Processa e filtra os artigos com filtros menos restritivos
    const articles = data.articles.results
      .filter((article: any) => {
        // Palavras-chave mais amplas
        const footballKeywords = [
          'futebol', 'football', 'soccer', 'copa', 'campeonato', 'brasileirão',
          'libertadores', 'fifa', 'cbf', 'gol', 'jogador', 'técnico', 'time',
          'clube', 'estádio', 'partida', 'jogo', 'sul-americana', 'série a',
          'série b', 'transferência', 'contratação'
        ];

        const title = (article.title || '').toLowerCase();
        const body = (article.body || '').toLowerCase();
        const content = title + ' ' + body;

        const hasFootballKeyword = footballKeywords.some(keyword => 
          content.includes(keyword.toLowerCase())
        );

        // Filtros de exclusão mais específicos
        const excludeKeywords = [
          'futebol americano', 'american football', 'rugby', 'basquete',
          'vôlei', 'tênis', 'natação', 'atletismo', 'automobilismo',
          'fórmula 1', 'moto gp', 'ciclismo', 'boxe', 'mma', 'ufc',
          'handebol', 'futsal' // removido futsal se quiser incluir
        ];

        const hasExcludeKeyword = excludeKeywords.some(keyword => 
          content.includes(keyword.toLowerCase())
        );

        // Verifica se o artigo é recente (últimos 7 dias)
        const articleDate = new Date(article.dateTime || article.date);
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const isRecent = articleDate >= sevenDaysAgo;

        return hasFootballKeyword && !hasExcludeKeyword && isRecent;
      })
      .map((article: any) => {
        // Corrige URLs de imagem
        if (article.image && !article.image.startsWith('http')) {
          article.image = `https://newsapi.ai${article.image}`;
        }

        // Adiciona informações de debug
        return {
          ...article,
          _debug: {
            fetchedAt: new Date().toISOString(),
            originalDate: article.dateTime || article.date
          }
        };
      })
      // Ordena por data mais recente primeiro
      .sort((a: any, b: any) => {
        const dateA = new Date(a.dateTime || a.date);
        const dateB = new Date(b.dateTime || b.date);
        return dateB.getTime() - dateA.getTime();
      })
      // Limita a 50 artigos mais recentes
      .slice(0, 50);

    console.log(`${articles.length} artigos encontrados após filtros`);

    // Log das datas dos primeiros artigos para debug
    if (articles.length > 0) {
      console.log('Artigos mais recentes:');
      articles.slice(0, 5).forEach((article: any, index: number) => {
        console.log(`${index + 1}. ${article.title} - ${new Date(article.dateTime || article.date).toLocaleString()}`);
      });
    }

    return articles;

  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

// Função auxiliar para limpar cache (chame periodicamente)
export function clearNewsCache() {
  // Se estiver usando algum sistema de cache local, limpe aqui
  console.log('Cache de notícias limpo em:', new Date().toLocaleString());
}
