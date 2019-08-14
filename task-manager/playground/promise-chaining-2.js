require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d503d3b6f4cb729ac53c1b0').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments(id)
    return count
}

deleteTaskAndCount('5d51662b83c64818e00ae84a').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})