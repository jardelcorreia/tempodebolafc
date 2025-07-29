export async function getNews() {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY is not defined");
    }

    // Usa o conceptUri para "futebol" (association football)
    const query = JSON.stringify({
      $query: {
        $and: [
          { conceptUri: "http://en.wikipedia.org/wiki/Association_football" },
          { lang: "por" }
        ]
      }
    });

    const encodedQuery = encodeURIComponent(query);

    const url = `https://newsapi.ai/api/v1/article/getArticles?query=${encodedQuery}&resultType=articles&articlesSortBy=date&apiKey=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API Response:", data);

    // Retorna apenas os artigos relevantes
    return data.articles?.results || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
