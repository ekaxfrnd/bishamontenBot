const { Telegraf } = require('telegraf')
const fs = require('fs')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const messages = require('./messages')
const snortStart = require('./commands/snortStart')
const snortStop = require('./commands/snortStop')

const snortstart = async () => {
    snortStart.snortStart();
    snortStart.watchStart();
};

const snortstop = async () => {
    snortStop.snortStop()
    snortStop.watchStop()
}

bot.start(ctx => {
    ctx.reply(messages.start)
})

bot.help(ctx => {
    ctx.reply(messages.help)
})

bot.command('snortstart', async ctx => {
    try {
        await snortstart()
        ctx. reply('snort run successfully.')
    } catch (err) {
        ctx.reply('snort failed to start.')
    }
})

bot.command('snortstop', async ctx => {
    try {
        await snortstop()
        ctx.reply('snort quit successfully.')
    } catch (err) {
        ctx.reply('snort failed to stop.')
    }
})

bot.command('snortrestart', async ctx => {
    try {
        await snortstop()
        await snortstart()
        ctx.reply('snort has restarted successfully.')
    } catch (err) {
        ctx.reply('snort failed to restart.')
    }
})

bot.command('logstart', ctx => {
    fs.watchFile('snort.log', (curr, prev) => {
        if(curr.mtime != prev.mtime) {
            fs.readFile('snort.log', 'utf8', (err, data) => {
                ctx.reply(data)
            })
        }
    })
})

bot.launch()
