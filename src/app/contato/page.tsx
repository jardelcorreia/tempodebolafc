import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contato</h1>
        <div className="prose prose-lg text-gray-700">
          <p>
            Gostaríamos de ouvir de você! Se você tiver alguma dúvida, sugestão ou feedback,
            por favor, entre em contato conosco através do email abaixo.
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:contato@example.com">contato@example.com</a>
          </p>
          <p>
            <strong>[Por favor, substitua pelo seu endereço de email real.]</strong>
          </p>
          <p>
            Você também pode nos encontrar em nossas redes sociais.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
