// console.log("vimal")

//variables- let, var, const
let names = "vimal"
//alert(names)
const testt = "constant"
//console.log(testt)

//alert(1/0);
//alert("1" * 1);

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
//console.log(phrase);

let str3 = `my name is ${""}`
let str4 = `my emp id is ${"1234"}`

//Data types
//console.log(str4 + " and "+ `${str3}`);
let isAnimal = true
//console.log(typeof(isAnimal) + `${isAnimal}`)


let str5 = null;
let str6;
//console.log(str5);
//console.log(str6);
/* 
let result = prompt("please enter ur name");
let results = confirm(`Is your name is ${result} ?`);//return true or false
alert("your name is verified");

console.log(results);
*/


/*
//Type conversion

let vals = 1
vals = Boolean(vals);
console.log(`${typeof(vals)}`,vals);
*/

/*
//maths and operators

//unary
let x = -2
let xx = 20;
alert(`${-xx}`);

//binary
let y = 3-2


// No effect on numbers
let xxx = 1;
alert( +x ); // 1

let yy = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5


let counter = 0;
alert( counter++ ); // 0
alert(counter); //1
*/
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(+a + +b); // 12