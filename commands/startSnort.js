const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
    startSnort: async () => {
        const { stdout, stderr } = await exec('sudo snort -u snort -g snort -i eth0 -c /etc/snort/snort.conf -q -A full -D')
        console.log(`stdout: `, stdout)
        console.log(`stderr: `, stderr)
    },
    startWatch: async () => {
        const { stdout, stderr } = await exec('watch -n 5 tail -n 20 /var/log/snort/alert > snort.log')
        console.log(`stdout: `, stdout)
        console.log(`stderr: `, stderr)
    }
}