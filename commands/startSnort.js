const { exec } = require('child_process')

const startSnort = exec('bash ../commands_util/startsnort.sh', (err, stdout, stderr) => {
    if(err) {
        console.log(`err: ${err.message}`)
    }
    if(stdout) {
        console.log(`snort run successfully.`)
    }
})

module.exports = startSnort