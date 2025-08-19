import { getNews } from "@/lib/news";
import Header from "@/components/Header";
export const revalidate = 60;
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";
import FeaturedArticle from "@/components/FeaturedArticle";

export default async function HomePage() {
  const [brasilNews, internacionalNews, mercadoNews] = await Promise.all([
    getNews('brasil'),
    getNews('internacional'),
    getNews('mercado')
  ]);

  const featuredArticle = brasilNews.length > 0 ? brasilNews[0] : null;
  const commentary = `É interessante observar como o mercado de patrocínios no futebol brasileiro vem se transformando nos últimos anos. O destaque aqui é o domínio das casas de apostas esportivas entre os principais acordos, ocupando todo o top 10 da lista.

Isso reflete uma tendência que vem se consolidando no país, com as empresas de apostas investindo pesado para se associarem às grandes marcas do futebol nacional. O Flamengo, por exemplo, conseguiu um contrato recorde de R$ 268,5 milhões anuais com a Betano, superando até mesmo o seu anterior acerto com a Pixbet.

Essa realidade demonstra a importância que o patrocínio master tem para os clubes atualmente. São valores milionários que se tornaram essenciais para as finanças dessas instituições, as quais parecem cada vez mais dependentes dessa receita.

O ranking evidencia também o poderio comercial dos grandes times, com Flamengo, São Paulo, Corinthians e Palmeiras liderando os maiores acordos. Chama a atenção, inclusive, a possibilidade do Palmeiras receber R$ 70 milhões adicionais por metas de títulos conquistados - uma estratégia interessante para incentivar o desempenho esportivo.

De todo modo, fica claro que o mercado de patrocínios no futebol brasileiro vive um momento de efervescência, com as casas de apostas ditando o ritmo dessa transformação. É um cenário que merece ser acompanhado de perto nos próximos anos.`;

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
              Tempo de Bola FC
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Seu portal de notícias sobre o mundo do futebol.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Featured Article Section */}
        {featuredArticle && (
          <FeaturedArticle article={featuredArticle} commentary={commentary} />
        )}

        {/* Brasil News */}
        <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Brasil</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brasilNews.slice(1, 7).map((article: any, index: number) => (
                <NewsCard
                    key={article.uri}
                    article={article}
                    index={index}
                    variant={'default'}
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
