const loadDouble = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() > 0.5

            if (shouldFail) {
                reject("My load error")
            } else {
                resolve(num * 2)
            }

        }, 1000);
    })
}

module.exports = loadDouble