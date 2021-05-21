const { Telegraf } = require('telegraf')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
    ctx.reply('Hello there, I\'m bishamon. Type /help to see more commands.')
})

bot.launch()