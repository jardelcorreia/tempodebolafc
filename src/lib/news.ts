export async function getNews() {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY is not defined");
    }

    // Objeto de consulta para mais clareza
    const query = {
      $query: {
        $and: [
          // Use conceptUri para filtrar pelo tópico de futebol ⚽
          { conceptUri: "dmoz/Sports/Soccer" },
          { lang: "por" },
        ],
      },
    };

    // Codifica a consulta para ser usada na URL
    const encodedQuery = encodeURIComponent(JSON.stringify(query));

    const response = await fetch(
      `https://newsapi.ai/api/v1/article/getArticles?query=${encodedQuery}&resultType=articles&articlesSortBy=date&apiKey=${apiKey}`
    );

    if (!response.ok) {
      // Adiciona mais detalhes ao erro
      const errorBody = await response.text();
      throw new Error(`Failed to fetch news: ${response.status} ${errorBody}`);
    }

    const data = await response.json();
    // Verifica se a resposta contém os artigos esperados
    if (data && data.articles && data.articles.results) {
      return data.articles.results;
    } else {
      console.warn("API response format is unexpected:", data);
      return [];
    }
    
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
