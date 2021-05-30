const { Telegraf } = require('telegraf')
const fs = require('fs')
const readline = require('linebyline')

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

bot.command('logstart', async ctx => {
    try {
        setInterval(() => {
            const rl = await readline('./snort.log')
            rl.on('line', (line, lineCount, byteCount) => {
                const lineSplit = line.split(' ')
                const months = [
                    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
                ]
                const month = lineSplit[0].slice(1, 2)
                ctx.reply(`
    -------- Log pada --------
    Tanggal: ${lineSplit[0].slice(3,5)} ${months[Number(month - 1)]} 2021
    Pukul: ${lineSplit[0].slice(6,14)}
    Dari IP: ${lineSplit[lineSplit.length - 3]}
    Ke IP: ${lineSplit[lineSplit.length -1]}
    `)
            })
            rl.on('error', e => {
                console.log(e.message)
            })
        }, 3000)
    } catch (err) {
        console.log(err.message)
    }
})

bot.launch()
