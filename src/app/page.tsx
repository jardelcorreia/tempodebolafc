import { getNews } from "@/lib/news";
import { Calendar } from "lucide-react";
import Header from "@/components/Header";
export const revalidate = 60;
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default async function HomePage() {
  const [brasilNews, internacionalNews, mercadoNews] = await Promise.all([
    getNews('brasil'),
    getNews('internacional'),
    getNews('mercado')
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Bem-vindo ao
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Analfabeto
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Seu portal de notícias sobre o mundo do futebol.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Brasil News */}
        <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Brasil</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brasilNews.slice(0, 6).map((article: any, index: number) => (
                <NewsCard
                    key={article.uri}
                    article={article}
                    index={index}
                    variant={index === 0 ? 'featured' : 'default'}
                />
                ))}
            </div>
        </div>

        {/* Internacional News */}
        <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Internacional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {internacionalNews.slice(0, 6).map((article: any, index: number) => (
                <NewsCard
                    key={article.uri}
                    article={article}
                    index={index}
                    variant={index === 0 ? 'featured' : 'default'}
                />
                ))}
            </div>
        </div>

        {/* Mercado News */}
        <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Mercado da Bola</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mercadoNews.slice(0, 6).map((article: any, index: number) => (
                <NewsCard
                    key={article.uri}
                    article={article}
                    index={index}
                    variant={index === 0 ? 'featured' : 'default'}
                />
                ))}
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
