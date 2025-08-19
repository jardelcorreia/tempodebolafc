import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Política de Privacidade</h1>
        <div className="prose prose-lg text-gray-700">
          <p>
            A sua privacidade é importante para nós. É política do Tempo de Bola FC respeitar a sua privacidade
            em relação a qualquer informação sua que possamos coletar no site.
          </p>
          <h2>1. Coleta de Informações</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
            Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
          </p>
          <h2>2. Uso de Cookies</h2>
          <p>
            Utilizamos cookies para melhorar a sua experiência. Ao utilizar nosso site, você concorda com o uso de cookies.
          </p>
          <h2>3. Links para Sites de Terceiros</h2>
          <p>
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não
            temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas
            respectivas políticas de privacidade.
          </p>
          <p>
            <strong>
              [Este é um modelo básico. É altamente recomendável que você consulte um profissional
              jurídico para criar uma política de privacidade completa e em conformidade com as leis
              aplicáveis, como a LGPD no Brasil.]
            </strong>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
