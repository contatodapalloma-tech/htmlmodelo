exports.handler = async (event) => {
  const agent = (event.headers["user-agent"] || "").toLowerCase();

  if (
    agent.includes("httrack") ||
    agent.includes("wget") ||
    agent.includes("webcopy") ||
    agent.includes("curl")
  ) {
    return {
      statusCode: 403,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "blocked" })
    };
  }

  const model = event.queryStringParameters?.model;

  const bots = {
    rebeca: "rebecaazevedo_bot",
    paloma: "palomaferreira_bot",
    alicia: "aliciamonteirobot",
    gabriela: "GabrielaMuniz_bot",
    duda: "DudaFerrari1_bot"
  };

  const bot = bots[model];

  if (!bot) {
    return {
      statusCode: 404,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Bot não encontrado" })
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      app: "tg://resolve?domain=" + bot,
      web: "https://t.me/" + bot
    })
  };
};