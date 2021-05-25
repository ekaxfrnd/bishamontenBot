const { Telegraf } = require('telegraf')
const fs = require('fs')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const messages = require('./messages')
const snortStart = require('./commands/snortStart')
const snortStop = require('./commands/snortStop')

bot.start(ctx => {
    ctx.reply(messages.start)
})

bot.help(ctx => {
    ctx.reply(messages.help)
})

bot.command('snortstart', ctx => {
    snortStart.snortStart()
    snortStart.watchStart()
    ctx.reply('snort run successfully.')
})

bot.command('snortstop', ctx => {
    snortStop.snortStop()
    snortStop.watchStop()
    ctx.reply('snort quit successfully.')
})

bot.launch()