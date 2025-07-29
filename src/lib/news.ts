import { NewsArticle } from "@/interfaces";

export async function getNews() {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      throw new Error("NEWS_API_KEY is not defined");
    }

    // 1. Calcular a data de 24h atrás (formato ISO 8601)
    const dateStart = new Date();
    dateStart.setTime(dateStart.getTime() - 24 * 60 * 60 * 1000); // 24h atrás
    const dateStartStr = dateStart.toISOString().split(".")[0] + "Z"; // Ex: 2025-04-05T10:00:00Z

    // 2. Conceito principal: Futebol
    const conceptUri = "http://en.wikipedia.org/wiki/Association_football";

    // 3. Categoria: Esportes (opcional, para reforçar)
    const categoryUri = "dmoz/Sports";

    // 4. Termos indesejados
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

    // 5. Domínios confiáveis (opcional)
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

    // Monta a query com filtro de data
    const query = {
      $query: {
        $and: [
          { conceptUri },
          { categoryUri },
          { lang: "por" },
          {
            $not: {
              keyword: blacklistTerms
            }
          }
        ]
      },
      $filter: {
        dateStart: dateStartStr, // Apenas artigos a partir das últimas 24h
        // sourceUri: allowedDomains // descomente se quiser restringir por domínio
      }
    };

    const encodedQuery = encodeURIComponent(JSON.stringify(query));

    const url = `https://newsapi.ai/api/v1/article/getArticles?query=${encodedQuery}&resultType=articles&articlesSortBy=date&apiKey=${apiKey}`;

    console.log("Request URL:", url);

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    // Filtro adicional no cliente (segurança extra contra ruído)
    const filteredResults = (data.articles?.results || []).filter((article: NewsArticle) => {
      const title = (article.title || "").toLowerCase();
      const body = (article.body || "").toLowerCase();
      return !blacklistTerms.some(term => title.includes(term) || body.includes(term));
    });

    console.log(`Fetched ${data.articles?.results?.length || 0} articles, filtered to ${filteredResults.length} (last 24h)`);
    return filteredResults;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
