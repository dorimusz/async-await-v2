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


/*
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
*/


/*
//egyenként elszaladgál a számokkal, és mp különbséggel adja vissza az eredményt
const numbers = [1, 2, 35, 76, 24, 17, 9, 55];
const run = async () => {
    for (const number of numbers) {
        try {
            const solution = await loadDouble(number)
            console.log(solution)
        } catch (err) {
            console.log(err)
        }
    }
}
run()
*/



const numbers = [1, 2, 35, 76, 24, 17, 9, 55];
const run = async () => {
    let promisesOfSolutions = []

    for (const number of numbers) {
        const solution = loadDouble(number) //ha ide teszem az awaitet, akkor a végén 10 mp múlva ad vissza mindent, mert bevárja az összeset
        promisesOfSolutions.push(solution)
    }

    try {
        const results = (await Promise.all(promisesOfSolutions)) //egy nagy promise az összes promiseból
        // console.log(results)
        for (const result of results) {
            console.log(result)
        }
    } catch (err) {
        console.log(err) //amik együtt kellenek, azok egyött hasalnak el, ha már lesz benne akárcsak egy db error is. pl. 5 szerverről kell valami
    }
}
run()

const run2 = async () => {
    for (const number of numbers) {
        loadDouble(number).then(result => console.log(result))
    }
}
run2()


const run3 = async () => {
    const result3 = await Promise.all(numbers.map(loadDouble))
    console.log(result3) //listányi szám
}
run3()