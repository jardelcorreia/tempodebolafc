export async function getNews() {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY is not defined");
    }

    // Objeto de consulta com todos os filtros
    const query = {
      $query: {
        $and: [
          // 1. O tópico deve ser futebol
          { conceptUri: "dmoz/Sports/Soccer" },
          // 2. O idioma do artigo deve ser português
          { lang: "por" },
          // 3. A fonte da notícia deve ser do Brasil
          { sourceLocationUri: "country/br" },
        ],
      },
    };

    // Codifica a consulta para ser usada na URL
    const encodedQuery = encodeURIComponent(JSON.stringify(query));

    const url = `https://newsapi.ai/api/v1/article/getArticles?query=${encodedQuery}&resultType=articles&articlesSortBy=date&apiKey=${apiKey}`;

    console.log("Requesting URL:", url); // Ótimo para depuração

    const response = await fetch(url);

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Failed to fetch news: ${response.status} ${errorBody}`);
    }

    const data = await response.json();

    if (data && data.articles && data.articles.results) {
      return data.articles.results;
    } else {
      console.warn("API response format is unexpected or returned no results:", data);
      return [];
    }

  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
