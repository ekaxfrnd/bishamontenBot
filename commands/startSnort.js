const { exec } = require('child_process')

const startSnort = exec('sudo snort -u snort -g snort -i eth0 -c /etc/snort/snort.conf -q -A full -D && watch -n 5 tail -n 20 /var/log/snort/alert > ../../snort.log &', (err, stdout, stderr) => {
    if(err) {
        console.log(`err: ${err.message}`)
    }
    if(stdout) {
        console.log(`snort run successfully.`)
    }
})

module.exports = startSnort