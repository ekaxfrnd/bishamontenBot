const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
    stopSnort: async () => {
        const { stdout, stderr } = await exec('sudo killall snort')
        console.log(`stdout: `, stdout)
        console.log(`stderr: `, stderr)
    },
    stopWatch: async () => {
        const { stdout, stderr } = await exec('killall watch')
        console.log(`stdout: `, stdout)
        console.log(`stderr: `, stderr)
    }
}