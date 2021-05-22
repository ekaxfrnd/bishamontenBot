const { Telegraf } = require('telegraf')
const fs = require('fs')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
    ctx.reply('Hello there, I\'m Bishamon. Type /help to see more commands.')
})

bot.command('startsnort', ctx => {
    require('./commands/startSnort')
    ctx.reply('snort run successfully.')
})

bot.launch()