import { getNews } from "@/lib/news";
import { Calendar } from "lucide-react";
import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";

const formatTimeAgo = (dateTime?: string) => {
  if (!dateTime) return 'Agora';
  const now = new Date();
  const articleDate = new Date(dateTime);
  const diffInMinutes = Math.floor((now.getTime() - articleDate.getTime()) / (1000 * 60));

  if (diffInMinutes < 60) return `${diffInMinutes}min`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
  return `${Math.floor(diffInMinutes / 1440)}d`;
};

export default async function MercadoPage() {
  const news = await getNews('mercado');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-blue-800 text-sm font-medium mb-8 border border-blue-200/50 shadow-lg animate-bounce">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
            AO VIVO - Últimas notícias do mercado da bola
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Mercado
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              da Bola
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Acompanhe as principais notícias sobre transferências, rumores e negociações do mundo do futebol
          </p>

        </div>
      </section>


      {/* News Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Últimas Notícias</h3>
            <p className="text-lg text-gray-600">Mantenha-se atualizado com as principais notícias do futebol</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Calendar className="w-4 h-4" />
              <span>Atualizado agora</span>
            </div>
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
                timeAgo={formatTimeAgo(article.dateTime)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <span className="text-4xl">⚽</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Carregando notícias...</h3>
            <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
              Estamos buscando as últimas notícias do mercado da bola para você
            </p>
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-150"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
