function first() {
    const age = 10
    let year = 1999

    function second() {
        console.log(age) // input: 10
        console.log(year) // input: 2001
    }

    year = 2001

    return second
}

function third(element) {
    return () => {
        return document.createElement(element)
    }
}

const result = first()

result() // toto je second funkce

const createDiv = third("div")
const createSpan = third("span")

console.log(createDiv()) // input: div element
console.log(createSpan())

// za 5 sekund vypise naraz 0 1 2
// let je block scoped - vyuziva porad novou promennou - definovano: i = 0; i = 1; i = 2
for(let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 5000) 
}

// za 5 sekund vypise naraz 3 3 3
// var je vice function based scoped - je to jak kdyby bylo definovano: var i = undefined a jelikoz mame jednu global proměnnou, tak se vykonají změny ve for loop - 0 1 2 3 a dal uz nepokracuje
// closure vzdy pouziva up-to-date hodnotu proměnné a proto to je 3 3 3
for(var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 5000) 
}

// za 5 sekund vypise naraz 3 3 3
let x = undefined // globalni promenna, ktera se aktualizuje 
for(x = 0; x < 3; x++) {
    setTimeout(() => {
        console.log(x)
    }, 5000) 
}



