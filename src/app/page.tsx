import { getNews } from "@/lib/news";

export default async function Home() {
  const news = await getNews();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-8">Tempo de Bola FC</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((article: any) => (
          <div key={article.uri} className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-sm text-gray-500">{article.source.title}</p>
            <p className="mt-2">{article.body}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
              Leia mais
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
