const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
    snortStop: async () => {
        const { stdout, stderr } = await exec('sudo systemctl stop snort')
        if(stdout) {
            console.log(`stdout: `, stdout)
        }
        if(stderr) {
            console.log(`stderr: `, stderr)
        }
    },
    watchStop: async () => {
        const { stdout, stderr } = await exec('killall watch')
        if(stdout) {
            console.log(`stdout: `, stdout)
        }
        if(stderr) {
            console.log(`stderr: `, stderr)
        }
    }
}