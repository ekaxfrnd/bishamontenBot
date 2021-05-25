const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
    snortStart: async () => {
        const { stdout, stderr } = await exec('sudo snort -u snort -g snort -i eth0 -c /etc/snort/snort.conf -q -A full -D')
        if(stdout) {
            console.log(`stdout: `, stdout)
        }
        if(stderr) {
            console.log(`stderr: `, stderr)
        }
    },
    watchStart: async () => {
        const { stdout, stderr } = await exec('watch -n 5 tail -n 18 /var/log/snort/alert > snort.log')
        if(stdout) {
            console.log(`stdout: `, stdout)
        }
        if(stderr) {
            console.log(`stderr: `, stderr)
        }
    }
}