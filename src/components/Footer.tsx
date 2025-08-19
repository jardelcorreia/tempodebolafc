export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">⚽</span>
              </div>
              <span className="text-xl font-bold">Tempo de Bola FC</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Sua fonte confiável para notícias de futebol do Brasil e do mundo.
              Cobertura completa, análises profundas e atualizações em tempo real.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-200">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-200">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-200">
                📷
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Seções</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/brasil" className="hover:text-emerald-400 transition-colors duration-200">Brasileirão</a></li>
              <li><a href="/brasil" className="hover:text-emerald-400 transition-colors duration-200">Copa do Brasil</a></li>
              <li><a href="/internacional" className="hover:text-emerald-400 transition-colors duration-200">Internacional</a></li>
              <li><a href="/mercado" className="hover:text-emerald-400 transition-colors duration-200">Mercado da Bola</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/sobre" className="hover:text-emerald-400 transition-colors duration-200">Equipe</a></li>
              <li><a href="/contato" className="hover:text-emerald-400 transition-colors duration-200">Contato</a></li>
              <li><a href="/politica-de-privacidade" className="hover:text-emerald-400 transition-colors duration-200">Política de Privacidade</a></li>
              <li><a href="/termos-de-uso" className="hover:text-emerald-400 transition-colors duration-200">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Tempo de Bola FC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
