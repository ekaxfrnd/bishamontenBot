const { exec } = require('child_process')

module.exports = exec('bash ../commands_util/startsnort.sh', (err, stdout, stderr) => {
    if(err) {
        console.log(`err: ${err.message}`)
    }
    if(stdout) {
        console.log(`snort run successfully.`)
    }
})