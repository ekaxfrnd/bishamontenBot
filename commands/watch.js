const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
    watchStart: async () => {
        const { stdout, stderr } = await exec('watch -n 1 tail -n 7 /var/log/snort/alert > snort.log &')
    },
    watchStop: async () => {
        const { stdout, stderr } = await exec('killall watch')
    }
}