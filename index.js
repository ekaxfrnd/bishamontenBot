const { Telegraf } = require('telegraf')
const fs = require('fs')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const helpMessage = require('./commands/help')
const startSnort = require('./commands/startSnort')
const stopSnort = require('./commands/stopSnort')

bot.start(ctx => {
    ctx.reply('Hello there, I\'m Bishamon. Type /help to see more commands.')
})

bot.help(ctx => {
    ctx.reply(helpMessage)
})

bot.command('startsnort', ctx => {
    startSnort.startSnort()
    startSnort.startWatch()
    ctx.reply('snort run successfully.')
})

bot.command('stopsnort', ctx => {
    stopSnort.stopSnort()
    stopSnort.stopWatch()
    ctx.reply('snort quit successfully.')
})

bot.launch()