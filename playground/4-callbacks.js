const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is an error!', undefined)
        callback(undefined, [1,4,7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error) {
        return console.log(error)
    }

    console.log(result)
})