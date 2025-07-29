export async function getNews() {
  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    throw new Error("NEWS_API_KEY is not defined");
  }

  const response = await fetch(
    `https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22categoryUri%22%3A%22dmoz%2FSports%2FFootball%22%7D%2C%7B%22lang%22%3A%22por%22%7D%5D%7D%7D&resultType=articles&articlesSortBy=date&apiKey=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await response.json();
  return data.articles.results;
}
