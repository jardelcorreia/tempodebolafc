export async function getNews() {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY is not defined");
    }

    // Usando múltiplas keywords específicas de futebol
    const params = new URLSearchParams({
      resultType: 'articles',
      keyword: 'futebol',
      keywordLoc: 'title,body', // Busca nas palavras-chave no título E corpo
      keywordOper: 'and', // Operador AND para ser mais restritivo
      lang: 'por',
      sourceLocationUri: 'http://en.wikipedia.org/wiki/Brazil',
      articlesSortBy: 'date',
      articlesCount: '50',
      apiKey: apiKey
    });

    const url = `https://newsapi.ai/api/v1/article/getArticles?${params.toString()}`;

    console.log('URL sendo chamada:', url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    console.log('Resposta da API:', data);

    // Verifica se há artigos na resposta
    if (!data.articles || !data.articles.results) {
      console.log('Nenhum artigo encontrado na resposta');
      return [];
    }

    // Processa e filtra os artigos
    const articles = data.articles.results
      .filter((article: any) => {
        // Palavras-chave relacionadas ao futebol
        const footballKeywords = [
          'futebol', 'football', 'soccer', 'copa', 'campeonato', 'brasileirão',
          'libertadores', 'fifa', 'cbf', 'gol', 'jogador', 'técnico', 'time',
          'clube', 'estádio', 'partida', 'jogo', 'flamengo', 'palmeiras',
          'corinthians', 'são paulo', 'santos', 'vasco', 'grêmio', 'inter',
          'atlético', 'cruzeiro', 'botafogo', 'fluminense', 'bahia', 'ceará',
          'fortaleza', 'sport', 'vitória', 'chapecoense', 'coritiba', 'athletico'
        ];
        
        const title = (article.title || '').toLowerCase();
        const body = (article.body || '').toLowerCase();
        const content = title + ' ' + body;
        
        // Verifica se pelo menos uma palavra-chave de futebol está presente
        const hasFootballKeyword = footballKeywords.some(keyword => 
          content.includes(keyword.toLowerCase())
        );
        
        // Palavras que indicam que NÃO é sobre futebol
        const excludeKeywords = [
          'futebol americano', 'american football', 'rugby', 'basquete',
          'vôlei', 'tênis', 'natação', 'atletismo', 'automobilismo',
          'fórmula 1', 'moto', 'ciclismo', 'boxe', 'mma', 'ufc'
        ];
        
        const hasExcludeKeyword = excludeKeywords.some(keyword => 
          content.includes(keyword.toLowerCase())
        );
        
        return hasFootballKeyword && !hasExcludeKeyword;
      })
      .map((article: any) => {
        if (article.image && !article.image.startsWith('http')) {
          article.image = `https://newsapi.ai${article.image}`;
        }
        return article;
      });

    console.log(`${articles.length} artigos encontrados`);
    return articles;

  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
