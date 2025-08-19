import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Termos de Uso</h1>
        <div className="prose prose-lg text-gray-700">
          <h2>1. Termos</h2>
          <p>
            Ao acessar ao site Tempo de Bola FC, concorda em cumprir estes termos de serviço, todas as leis e
            regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
          </p>
          <h2>2. Uso de Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site
            Tempo de Bola FC, apenas para visualização transitória pessoal e não comercial.
          </p>
          <h2>3. Limitações</h2>
          <p>
            Em nenhum caso o Tempo de Bola FC ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação,
            danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade
            de usar os materiais em Tempo de Bola FC.
          </p>
          <p>
            <strong>
              [Este é um modelo básico. É altamente recomendável que você consulte um profissional
              jurídico para criar termos de uso completos e adequados às suas operações.]
            </strong>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
