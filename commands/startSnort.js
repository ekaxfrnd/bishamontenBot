const { exec } = require('child_process')

module.exports = {
    startSnort: exec('sudo snort -u snort -g snort -i eth0 -c /etc/snort/snort.conf -q -A full -D', (err, stdout, stderr) => {
        if(err) {
            console.log(`err: ${err.message}`)
            return
        }
        if(stdout) {
            console.log(`snort run successfully.`)
        }
        if(stderr) {
            console.log(`stderr: ${stderr}`);
        }
    }),
    startWatch: exec('watch -n 5 tail -n 20 /var/log/snort/alert > ../../snort.log &', (err, stdout, stderr) => {
        if(err) {
            console.log(`err: ${err.message}`)
            return
        }
        if(stdout) {
            console.log(`watch run successfully.`)
        }
        if(stderr) {
            console.log(`stderr: ${stderr}`)
        }
    })
}