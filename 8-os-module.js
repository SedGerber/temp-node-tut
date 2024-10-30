const os = require('os') // built-in module

// info about current user
const user = os.userInfo()
console.log(user)

// method returns system uptime in seconds
console.log(`Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)
