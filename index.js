const { Telegraf } = require('telegraf')
const fs = require('fs')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const helpMessage = require('./commands/help')
const snortStart = require('./commands/snortStart')
const snortStop = require('./commands/snortStop')

bot.start(ctx => {
    ctx.reply('Hello there, I\'m Bishamon. Type /help to see more commands.')
})

bot.help(ctx => {
    ctx.reply(helpMessage)
})

bot.command('startsnort', ctx => {
    snortStart.snortStart()
    snortStart.watchStart()
    ctx.reply('snort run successfully.')
})

bot.command('stopsnort', ctx => {
    snortStop.snortStop()
    snortStop.watchStop()
    ctx.reply('snort quit successfully.')
})

bot.launch()