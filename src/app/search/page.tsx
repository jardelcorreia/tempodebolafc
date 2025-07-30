import { getNews } from "@/lib/news";
import { Calendar, Search } from "lucide-react";
import Header from "@/components/Header";
export const revalidate = 60;
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q;
  const news = await getNews(query as any);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-transparent to-gray-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 text-sm font-medium mb-8 border border-gray-200/50 shadow-lg">
            <Search className="w-4 h-4 mr-2" />
            Resultados da busca para:
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {query}
          </h2>
        </div>
      </section>


      {/* News Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Resultados</h3>
            <p className="text-lg text-gray-600">
              {news.length} {news.length === 1 ? 'notícia encontrada' : 'notícias encontradas'}
            </p>
          </div>
        </div>

        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article: any, index: number) => (
              <NewsCard
                key={article.uri}
                article={article}
                index={index}
                variant={index === 0 ? 'featured' : 'default'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <span className="text-4xl">⚽</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nenhuma notícia encontrada</h3>
            <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
              Tente buscar por outros termos.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
