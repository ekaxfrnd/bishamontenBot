const { Telegraf } = require("telegraf");
const fs = require("fs");

require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const messages = require("./messages");
const snortStart = require("./commands/snortStart");
const snortStop = require("./commands/snortStop");
const snortstop = () => {
    snortStop.snortStop();
    snortStop.watchStop();
};
const snortrestart = () => {
    snortStop.snortStop();
    snortStop.watchStop();
    snortStart.snortStart();
    snortStart.watchStart();
};

bot.start((ctx) => {
    ctx.reply(messages.start);
});

bot.help((ctx) => {
    ctx.reply(messages.help);
});

bot.command("snortstart", async (ctx) => {
    try {
        await snortstart();
        ctx.reply("snort run successfully.");
    } catch (err) {
        ctx.reply("snort failed to start.");
    }
});

bot.command("snortstop", async (ctx) => {
    try {
        await snortstop();
        ctx.reply("snort quit successfully.");
    } catch (err) {
        ctx.reply("snort failed to stop.");
    }
});

bot.command("snortrestart", async (ctx) => {
    try {
        await snortrestart();
        ctx.reply("snort has restarted successfully.");
    } catch (err) {
        ctx.reply("snort failed to restart.");
    }
});

bot.launch();
