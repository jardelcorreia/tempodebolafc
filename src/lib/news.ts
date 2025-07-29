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

    // Prepend the base URL to the image URLs if they are not already absolute
    const articles = data.articles?.results.map((article: any) => {
      if (article.image && !article.image.startsWith('http')) {
        article.image = `https://newsapi.ai/${article.image}`;
      }
      console.log("Image URL:", article.image);
      return article;
    });

    // Retorna apenas os artigos relevantes
    return articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
