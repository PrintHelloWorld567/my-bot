const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on("ready", () => {
  console.log("Bot is online!");
});

client.on("messageCreate", msg => {
  if (msg.content === "!ping") {
    msg.reply("pong");
  }
});

client.login(process.env.TOKEN);

// keep alive
require("http").createServer((req, res) => {
  res.end("alive");
}).listen(3000);
