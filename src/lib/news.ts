export async function getNews() {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY is not defined");
    }

    // Parâmetros diretos na URL - sem JSON query
    const params = new URLSearchParams({
      resultType: 'articles',
      conceptUri: 'http://en.wikipedia.org/wiki/Association_football',
      lang: 'por',
      sourceLocationUri: 'http://en.wikipedia.org/wiki/Brazil',
      articlesSortBy: 'date',
      articlesCount: '50', // Número de artigos
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

    // Processa as imagens dos artigos
    const articles = data.articles.results.map((article: any) => {
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
