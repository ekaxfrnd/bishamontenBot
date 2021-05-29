const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
    snortStart: async () => {
        const { stdout, stderr } = await exec('sudo systemctl start snort')
        if(stdout) {
            console.log(`stdout: `, stdout)
        }
        if(stderr) {
            console.log(`stderr: `, stderr)
        }
    },
    watchStart: async () => {
        const { stdout, stderr } = await exec('watch -n 3 tail -n 5 /var/log/snort/alert > snort.log &')
        if(stdout) {
            console.log(`stdout: `, stdout)
        }
        if(stderr) {
            console.log(`stderr: `, stderr)
        }
    }
}