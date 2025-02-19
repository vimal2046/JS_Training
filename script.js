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

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(+a + +b); // 12
*/
/*
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

//comaperison convert null into number
*/


/*
//loops
for(let i=1;i<=5;i++){
    let year = Number(prompt("enter the year as 2015....😁😁😒"));
    if (year == 2015){
        alert('you are correct');
        break;
    }else{
        alert('you are wrong');
        continue;
    }
}
    */

/*
//using ternary operator
let test = prompt('what is ur name?');
let res =  test == 'vimal' ? true : false
alert(res)
*/

/*
i = 0;
while(i <= 4){


let age = prompt('enter ur age ?');

let res = (age ==18) ? 'you are eligible to vote' : (age <= 18) ?'u are not eligible to vote' : (age > 18) ? 'u are very old' : "no ans for u😒";
i++;
alert(res);
}
*/
/*
let a = null || undefined ;
let res = (a ?? "nothing")
alert(res)
*/
/*
//global scope variable
let val = "vimal";
alert(val)
function myFunc(){
    alert(val);
    val = "vimalchandar"
    
}
myFunc()
alert(val)
*/
/*
let two = "chandar"
function myFunc(one,two){
   alert(one);
    alert(two);
}
let one = 'vimal';
myFunc(one,two)
*/
/*
function myFunc(first, second){
    alert(`${first} from the ${second}`);
    two = "chandar_second"
}
let one = "vimal_first";
let two;
myFunc(one,two)
*/
/*
myFunc(val)
function myFunc(val){
    if(val == undefined){
        return;
    }else{
        alert("not undefined");
    }
   console.log(val);//value is not defined
}

function calcAge(age){
    return (age > 18) || confirm("did your parents allowed u ?") ;
}
let age = 12;
calcAge(age)
*/
/*
let one = Number(prompt("enter number one"));
let two = Number(prompt("enter number two"));

function calcMinimum(one,two){
    let res = Math.pow(one,two);
    return res;
}
console.log(calcMinimum(one,two))
*/
/*
//function expression
let sayHi = function(val){
    console.log(val)
}
let val = 12;
sayHi(val)
let newFunc = sayHi;
newFunc(val+1);
*/
/*
//callback functions
function sampleQues(ques,yes,no){

    if(confirm(ques)) yes()
        else{
            no()
        }
}
function yes(){
    alert('you are humam!! welcome to our ❤️')
}
function no(){
    alert("SORRY !! you are not allowed to ener into this world🥺🥺")
}
sampleQues("are u humane ?",yes, no);
*/
/*
//Arrow functions
let func = (val) => {
    //console.log(val)
}
func("sample")

let age = Number(prompt("enter the number"));
let check = (age >= 18) ? 
    () =>console.log("truw") :
    () =>console.log("false");
check();
*/
/*
let verify=(ques,yes,no)=>{
        if(confirm(ques)) yes()
            else
        no()
        
      
}
let no = () => alert("not eligible")
let yes = () => alert("eligible")
verify("age",yes,no)
*/
/*
let students={
    std1:['vimal','hydra'],
    std2:'vimal2',
    std3:'vimal3',
    
}
delete students.std2
console.log(students)
*/
/*
let animals={
    "big animal":'elephant',
    "small animal":'rat',
}
console.log(animals["big animal"])
delete animals['big animal']
console.log(animals["big animal"])
*/
/*
let fruit = String(prompt('enter the fruit name'));
//let quantity = Number(prompt('enter quantity'));
let basket={
    [fruit]: 4,
    apple:10,
}
console.log(basket)
*/
/*
//updating value using function
function createUser(std1,reg1){
    return{
        std1:std1,
        reg1:reg1,
    }
}
let user=createUser("vimal","343sd");
console.log(user)
*/

/*
//doing same by using the short hand operator
function users(names, rollNo){
    return{
        names,
        rollNo,
    };
    }
   
let res = users('vimal','123')
console.log(res)
*/
/*
let vals = {
    namee:'vimal',
    cls:"23",
    roll:"js",
    roll_vals:{
        qq:"12",
        ww:"13",
        ee:'14'
    }
}
console.log(vals.roll_vals.ee)
*/
/*
let details = {
    firstName:"vimal",
    secondName:"chandar",
    rollNo:"548",
    fullName:function(){
        
        return  this.firstName + this.secondName;
        //return `${this.firstName} the last name is ${this.secondName}`;
    },
    //short method
    allDetails(){
        return this.secondName + this.firstName
    }

}
console.log(details.fullName())
console.log(details.allDetails())

*/

/*
//assign operator in js
let func ={
    names:"vimal",
    cls:"123",
    time:12,
    year:1222
}

let month = {
    mon:8,

}
let test = {
    dd:"232",
}
//object merging
Object.assign(func, month)



//OBJECT CLONING
const newObjs = Object.assign({},func)
console.log(newObjs)
//spread operator to copy obj

const finalobj = {...func}

console.log(finalobj)

*/
/*
//make first letter capital
let strs = 'john';
let ress = strs[0].toUpperCase()+strs.slice(1)
console.log(ress)
*/

/*
let spam= 'xxxerqw'

let smaller = spam.toLowerCase();

function check (){
    return smaller.includes('xxx')
}
console.log(check())
*/

let styles = ['Jazz','Blues']
styles.push['Rock-n-Roll']
styles.pop['Blues']
styles.push['1231']
console.log(styles);