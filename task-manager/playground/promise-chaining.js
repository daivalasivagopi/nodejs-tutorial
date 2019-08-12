require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5d502ecce1c15a2334fddf13', { age: 0 }).then ((user) => {
    console.log(user)
    return User.countDocuments({ age: 0 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})