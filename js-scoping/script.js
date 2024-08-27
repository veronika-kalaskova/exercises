// ## ==What is scoping==
// určuje, kde a jak lze přistupovat k proměnným, funkcím a objektům v kódu

function printAge(age) { 
	console.log(age)
}

printAge(29)

// důležitým aspektem scoping je, že se to může dívat vždy ven (např. na globální proměnné), ale nikdy ne dovnitř složených závorek
const isProgrammer = true

function printAge1(age) { 
	console.log(age, isProgrammer) // kouká se "ven"
}

// console.log(age) // ERROR, protože se nemůže koukat "dovnitř"

// use the variable that are is the most inner level of scope
function printAge2(age) { // first level of scoping
	const firstName = "Name"

	if (true) { // second level of scoping
		const firstName = "Name 2" // nebude error, protože to je different level of scope
		console.log(firstName) // input: Name 2
	}
}

// console.log(age) // ERROR

// ## ==Scoping levels==
// **Global scope** -> všechno, co je přístupné v celé aplikaci
// **Local scope** -> přístupné pouze lokálně, kde právě náš kód běží
// **Script scope** -> proměnné, které jsou přístupné kdekoliv v našich různých scriptech
// **Block scope** -> pouze const a let jsou block scoped, reprezentuje aktuální blok kódu, ve kterém se právě nacházíme
// **Module scope** -> musíme definovat `<script src="script.js" type="module"></script>`, nyní to je vše, co je přístupné pouze v jednom skriptu


function printAge3(age) { // printAge - global, age - local
    const other = "other" // local
    if (true) {
        const firstName = "Name" // block
        if(true) {
            const surname = "Surname" // block
            debugger
        }
    }
}

// isProgrammer - script

printAge3(20)