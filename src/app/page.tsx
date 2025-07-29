import { getNews } from "@/lib/news";
import { Calendar, TrendingUp, Globe, Users, Play, Trophy, Zap } from "lucide-react";
import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";

export default async function Home() {
  const news = await getNews();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-emerald-800 text-sm font-medium mb-8 border border-emerald-200/50 shadow-lg animate-bounce">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
            AO VIVO - Últimas notícias do futebol
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Sua fonte de
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              notícias esportivas
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Acompanhe as principais notícias, transferências, resultados e análises do mundo do futebol em tempo real
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              <Play className="w-5 h-5 mr-2" />
              Assistir Highlights
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl hover:bg-white transition-all duration-300 border border-gray-200/50 shadow-lg hover:shadow-xl">
              <Trophy className="w-5 h-5 mr-2" />
              Ver Classificação
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white/70 backdrop-blur-sm border-y border-gray-200/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tempo de Bola em números</h3>
            <p className="text-gray-600">A confiança de milhões de torcedores</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">50+</p>
              <p className="text-sm text-gray-600">Países cobertos</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">2M+</p>
              <p className="text-sm text-gray-600">Leitores mensais</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">24/7</p>
              <p className="text-sm text-gray-600">Tempo real</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">500+</p>
              <p className="text-sm text-gray-600">Notícias diárias</p>
            </div>
          </div>
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
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <span className="text-4xl">⚽</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Carregando notícias...</h3>
            <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
              Estamos buscando as últimas notícias do mundo do futebol para você
            </p>
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
