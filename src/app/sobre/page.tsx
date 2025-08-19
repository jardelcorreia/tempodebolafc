import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nós</h1>
        <div className="prose prose-lg text-gray-700">
          <p>
            Bem-vindo ao Tempo de Bola FC, sua fonte de notícias e análises sobre o mundo do futebol.
          </p>
          <p>
            Nossa missão é fornecer a cobertura mais completa e imparcial do futebol brasileiro e internacional,
            desde os grandes campeonatos até as últimas notícias do mercado da bola.
          </p>
          <p>
            Nossa equipe é formada por apaixonados por futebol que trabalham incansavelmente para trazer
            conteúdo de qualidade, análises aprofundadas e informações em primeira mão para você, nosso leitor.
          </p>
          <p>
            <strong>[Por favor, adicione mais detalhes sobre sua equipe e a história do seu site aqui.]</strong>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
