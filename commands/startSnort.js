const { exec } = require('child_process')

module.exports = exec('bash ../commands/startsnort.sh', (err, stdout, stderr) => {
    if(err) {
        console.log(`err: ${err.message}`)
    }
    console.log(`snort run successfully.`)
})