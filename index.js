const loadDouble = require('./load');

/*
//promist ad vissza
// const result = loadDouble(5)
// console.log(result)
*/

/*
//itt már kiírja nem csak a promiset, hanem a then-nel jön a visszatérsi értéke is
loadDouble(5).then(solution => console.log(solution));
*/

/* 
// result és error kiíratása a consolera
// const promiseOfSolution = loadDouble(5)
promiseOfSolution.then(solution => console.log(solution)).catch(err => console.log(err))
*/


//egy async function, ahol egyszer a promiseOfSolution változó értékét logolja ki (pending promise) - EZ NEM OKÉS, ALATTA A BEST PRACTICE
const promiseOfSolution = async () => {
    return await loadDouble(5)
}
// console.log(promiseOfSolution())

//ezért meg kell hívnunk egy adott értékkel egy async functionben, mert bevárjuk, hogy az ígéret megtörténjen. a hibakezelés miatt teszem try-catch blokkokba
const run = async () => {
    try {
        const solution = await loadDouble(5)
        // return solution //e nélkül upending promise
        console.log(solution)
    } catch (err) {
        console.log(err)
    }
}
run()