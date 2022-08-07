const { Telegraf } = require("telegraf");
const TOKEN = "5453541569:AAGrJQEpIsM3ohLJZ1-ydXafuAI-LfftKFU";

const bot = new Telegraf(TOKEN);
const web_link = "https://comfy-boba-dd2005.netlify.app";
// const web_link = "https://tiny-nasturtium-17a374.netlify.app";
// bot.start((ctx) => ctx.reply("Hello you are welcome"));
bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
