export async function getNews() {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY is not defined");
    }

    // 1. Conceito principal: Futebol (Association football)
    const conceptUri = "http://en.wikipedia.org/wiki/Association_football";

    // 2. Categoria: Esportes
    const categoryUri = "dmoz/Sports"; // ou "http://dmoztools.net/Sports/"

    // 3. Lista de termos indesejados (para excluir falsos positivos)
    const blacklistTerms = [
      "futebol americano",
      "flag football",
      "touch football",
      "futebol de botão",
      "futebol de rua",
      "fantasy football",
      "futebol manager",
      "jogo eletrônico",
      "video game"
    ];

    // 4. (Opcional) Limitar a domínios esportivos confiáveis
    // Comente ou remova se quiser ampliar a cobertura
    const allowedDomains = [
      "globo.com",
      "ge.globo.com",
      "uol.com.br",
      "folha.uol.com.br",
      "espn.com.br",
      "terra.com.br",
      "cbf.com.br",
      "record.pt",
      "maisfutebol.iol.pt",
      "abril.com.br"
    ];

    // Monta a query semântica avançada
    const query = {
      $query: {
        $and: [
          // Filtra por conceito de futebol
          { conceptUri },
          // Reforça que é sobre esportes
          { categoryUri },
          // Idioma: português
          { lang: "por" },
          // Exclui artigos com termos indesejados
          {
            $not: {
              keyword: blacklistTerms
            }
          }
        ]
      },
      // (Opcional) Restringe a domínios confiáveis
      $filter: {
        forceMaxDataTimeWindow: "31" // últimos 31 dias (limite da versão gratuita)
        // sourceUri: allowedDomains // descomente se quiser restringir por domínio
      }
    };

    // Codifica a query para a URL
    const encodedQuery = encodeURIComponent(JSON.stringify(query));

    const url = `https://newsapi.ai/api/v1/article/getArticles?query=${encodedQuery}&resultType=articles&articlesSortBy=date&apiKey=${apiKey}`;

    console.log("Request URL:", url); // útil para debug

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    // Filtra novamente no lado do cliente (opcional, para segurança extra)
    const filteredResults = data.articles?.results?.filter(article => {
      const title = (article.title || "").toLowerCase();
      const body = (article.body || "").toLowerCase();

      // Verifica se contém algum termo bloqueado
      return !blacklistTerms.some(term =>
        title.includes(term) || body.includes(term)
      );
    }) || [];

    console.log(`Fetched ${data.articles?.results?.length || 0} articles, filtered to ${filteredResults.length}`);
    return filteredResults;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
