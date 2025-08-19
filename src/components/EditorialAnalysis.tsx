import { Pen, UserCircle } from 'lucide-react';

export default function EditorialAnalysis() {
  const analysis = {
    title: "A Nova Era dos Patrocínios no Futebol Brasileiro",
    author: "Jardel Correia, Editor Chefe",
    paragraphs: [
      "É interessante observar como o mercado de patrocínios no futebol brasileiro vem se transformando nos últimos anos. O destaque aqui é o domínio das casas de apostas esportivas entre os principais acordos, ocupando todo o top 10 da lista.",
      "Isso reflete uma tendência que vem se consolidando no país, com as empresas de apostas investindo pesado para se associarem às grandes marcas do futebol nacional. O Flamengo, por exemplo, conseguiu um contrato recorde de R$ 268,5 milhões anuais com a Betano, superando até mesmo o seu anterior acerto com a Pixbet.",
      "Essa realidade demonstra a importância que o patrocínio master tem para os clubes atualmente. São valores milionários que se tornaram essenciais para as finanças dessas instituições, as quais parecem cada vez mais dependentes dessa receita.",
      "[Este é um exemplo de conteúdo original que você pode criar. Sinta-se à vontade para substituir este texto pela sua própria análise aprofundada sobre um tema relevante no mundo do futebol.]"
    ]
  };

  return (
    <section className="bg-white rounded-3xl p-8 md:p-12 mb-20 shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-full p-3 mr-4">
          <Pen className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Análise do Editor
          </h2>
          <div className="flex items-center text-gray-500 mt-1">
            <UserCircle className="w-5 h-5 mr-2" />
            <span>{analysis.author}</span>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">{analysis.title}</h3>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
        {analysis.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </section>
  );
}
