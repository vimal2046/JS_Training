
/*
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
fkwfk
*/
/*
//using Symbol.iterator
let range = {
    from:3,
    to:9
}

range[Symbol.iterator] = function(){

    return{
        current: this.from,
        last: this.to,

        next(){

            if(this.current <= this.last){
                return{
                    done: false, value: this.current++};

                
            }else{
                return{done:true}
            }
        }
    }
}

for (let num of range){
    alert(num);
}
    */

/*
let sys = "vimalchandar";
let arr = []
let iterator = sys[Symbol.iterator]();

while (true){
    let res = iterator.next();
    if(res.done) break;
    arr.push(res.value)
}
alert(arr);
*/
/*

let strs = 'vima233nfd'

let chars  = Array.from(strs)

console.log(chars);
*/

/*
//array de structuring
let arr = ['vimal','chandar','hello',"all","i am hydra"]
const [first,second,third] = arr;
console.log(first, second, third)


//object de structuring

const obj ={
    name:'vimal',
    roll:"student",
    agr:"21",
    email:"vimal@gmail.com",
}

const {name,roll,agr,email:emai} = obj;
console.log(name,roll,agr,emai)
*/

/*
//using spread operator
let arr1 = [1,2,3,4,5,6]
let arr2 = [7,8,9,10,11,12]

let arrr = [...arr1, ...arr2]
console.log(arrr)



class Students{
    name = "vimalchandar";
    roll = "student";
    age = "23"
}

*/

/*
//Arrow functions in depth
let func = function(str1, str2){
    let str3 = str1 + str2;
    return str3
}

console.log(func(1,2))

*/

/*
let sum =  b => b ** 2;

console.log(sum(5))
*/
/*
let verify = function(st1,st2){
     st1 > st2 ? verify1() : verify2 
        
}
function verify1(){
    console.log("hello it is verified")
}

function verify2(){
    console.log("you are not allowed")
}
verify(102,20)

//multiline arrow function

let arrow = (arg1,arg2)=> {
    let sum = arg1 + arg2
    return sum
}
console.log(arrow(10,20))

*/
/*
let user

console.log(user ?? "enter the user value")

*/
/*
let str1 =54;
let str2 = 42;

let func = (str1,str2) => {


while(str1>str2){
    
    str1 = str1 - 1;
    return str1
}


}
console.log(func(str1,str2))
// while loop is used to execute a block of code repeatedly for a specified number of times. It

*/
/*

let age = "18"
switch(age){
    case 18:
        console.log("you are 18");
        break;
    case "18":
        console.log("you are 18 in string");
        break
    default:
        console.log("you are not 18");
}
        */
       /*
let num = 10;
let num2 = 20;
debugger;
let func = (num,num2) => {
    let sum = num + num2;
    return sum;
    }
    console.log(func(num,num2));
*/
/*
function pow(x, n){
    let result = 1;
    for (let i = 0;i<n;i++){
        return result;
    }
let x = prompt("x?", "");
let n = prompt("n?", "");
if(n <= 0){
    alert(`power ${n} is not supportes,
        plese enter the greater value` )
    }
else{
    alert(pow(x, n));
}
    }
*/
/*
let user = {
    "name": "vimal",
    "roll": "trainee",
    "age": 21,
    "address": {
        "street": "street1",    
        "city": "city1",
        "state": "state1",
        }
}

console.log(user.address)
*/
/*
let vals = new Object();

vals.name = "viam"
vals.roll = "trainee"

console.log(vals.name)
*/
/*
let usr = {
    "isHuman" : true,
    "isAnimal": false
}
console.log(usr.isAnimal)

usr.isAnimal = true;
console.log(usr.isAnimal)
console.log(usr)
delete usr.isHuman
console.log(usr)
*/
/*
let usr = {
    "first name" : "vimal chandar"
}

console.log(usr["first name"])
*/

/*
let user = {
    "name": "vimal",
    "roll": "trainee",
    "age": 21,
    "address": {
        "street": "street1",
        "city": "city1",
        "state": "state1",
        }
}
let key = prompt(('enter what property do you want from the user'));

console.log(user[key])
*/
/*
let fruit = prompt("what name u want give ?");

let things = {
    [fruit] : "banana",
    "apple" : "apple",
}
console.log(things);
*/

/*
let fruit = 'apple'
let bag = {
    [fruit + ' items'] : "banana",
};
console.log(bag);// apple items = banana
*/

/*
function makeUser(name,age,roll){
    return{
        name,
        age,
        roll,
        bii : "dwekf"
    }
}
console.log(makeUser("vimal",12,"trainee"))
*/

/*
//using reserved words inside the obj is possible
let obj = {
    let:"lee",
    var : "vee",
    const : "vimal",
}
console.log(obj) //gives as normal
*/

/*
//we cant able to use __proto__ as a property name...
//this one is execption
let usr = {
__proto__ : 5,
}
usr.__proto__ = 5;
console.log(usr.__proto__) //undefined
*/

/*
let usr = {
    viaml:2,
}
console.log(usr.fs)
console.log("viaml" in usr)
console.log("viaml" in usr) //false
*/
/*
let users = {
    name : "vimal",
    age : 12,
    roll : "trainee",
    21:323,
    23 :32,
    1:3233,
    3:53,

}
for(let key in users){
    console.log(`${key} and the value is ${users[key]}`)
}
*/
/*
let codes = {
    "+1":"one",
    "+23":"two",
    "+3":"three",
    "+4":"four",
    "+5":"five",
}

for (let code in codes){
    console.log(`+${code} is ${codes[code]}`)
}
    */

/*
let salaries = {
    john : 100,
    Ann : 160,
    Pete : "good boy",
}

for (let salary in salaries){
   if (typeof salaries[salary] === "number"){
    salaries[salary] = salaries[salary] * 2;
   } 
}

console.log(salaries)
*/
/*
let usr = {
    name :"vimal",
    age : 12,
    roll : "trainee",
}

let cloneObj = {};

for (let key in usr){
    cloneObj[key] = usr[key];
}

console.log(cloneObj);

usr.name = "rahul";
console.log(usr)
console.log(cloneObj)

let sam = {};

Object.assign(sam,cloneObj)

console.log(sam)
*/

/*

let studentsList = {
    name1 : "std1",
    name2 : "std2",
    name3 : "std3",
    name4 : "std4",
}

let clone = Object.assign({},studentsList);
console.log(clone);
*/
/*

let usr  = {
    name : "vimal",
    roll : "student",
    age : 12,
    toDo: {
        1 : 12,
        2 : 13,
        3 : 14,
        4 : 15,
    }
}

let clone = structuredClone(usr)

console.log(clone)
*/
/*
let user = {
    name: "vimal",
    roll: "student",
    age: 12,
    sayHi() {
        console.log(this.roll)
    }
};
let admin = user
user = null
admin.sayHi()
*/
/*
function sayHi() {
    console.log(this);
  }
  
  sayHi(); // ❌ In strict mode: undefined, in normal mode: window
  */
/*
  let user = {name : "vimal"}
  let admin = {name :"nveen"}

  function sayHi(){
    console.log(this.name)
  }

user.f =sayHi;
admin.f = sayHi;

user.f();
admin.f();
*/
/*
let user1 = 
{
    name : "vimal",
    age : 12,
    sayHi() {
        console.log(this.name);
    }
}
let user2 = {
    name : "nveen",
    age : 14,
    sayHi(){
        console.log(this.name);
    }
}
user1.sayHi();
user2.sayHi();

*/
/*
let user = {
    name: "John",
    sayHi: ()  {
      console.log(this.name + " says hi!");
    }
  };
  
  let clone = user.sayHi(); // Fix this!

  */
 /*
  let calculator = {
    read(){
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);

    },
    sum(){
        return this.a + this.b;
        
    },
    mul(){
        return this.a * this.b;
        }
  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );
  */
/*
  function User(name){
    this.name = name;
    this.isAdmin = false;
    console.log(this.name)
  }

let user = new User("Jack");
console.log(user.name); // Jack
*/
/*
let User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getFullName = function(){
        console.log(`course count is ${this.courseCount}`);
    }
}

let vimal = new User("vimalchandar", 2)
let sam = new User("nveeb",32);
let archie = new User("test",4)

console.log(archie.firstName)
*/
/*
function Members(memName,memAge,memhabit){
    this.memName = memName;
    this.memAge = memAge;
    this.memhabit = memhabit;
    this.welcomeMsg = function(){
        console.log(`welcome onboard ${memName} you are good to go !!`)
    };   
}

let member1 = new Members("vimal",21,"nothing")
let member2 = new Members("hydra",100,"bad");
let member3 = new Members(mem = prompt("enter the user name") ,prompt("enter age"),prompt("enter habit"));
member1.welcomeMsg();//welcome onboard vimal you are good to go !!
member2.welcomeMsg();//welcome onboard hyda you are good to go !!
member3.welcomeMsg();//welcome onboard chintu you are good to go !!
*/
/*

function Calc (){
    this.read = function(){
        this.num1 = prompt("enter num 1")
        this.num2 = prompt("enter num 2")
    };
    this.sum = function() {
        return this.num1 + this.num2;
    };
    this.mul = function(){
        return this.num1 * this.num2
    }
}
let calc = new Calc();
calc.read();
console.log(calc.sum())
*/
/*
 let user = {
    name: "vimal",
    address : {
    }
 }
 console.log(user?.address?.street);
 */

 /*
let user = {
    greet : () => "hello"
};
console.log(user?.greet())//bye
console.log(user?.bye())//undefined
*/

/*
let users = [{name : "vimal",class :"10"},{name1 : "vvv",std2 : "21"}]
console.log(users[0]?.name)
*/

//symbol type
/*
let id =  Symbol("one");

let id2 = Symbol("two")
console.log(id == id2);
*/
/*

let id = Symbol("sample symbol")
let ide = Symbol("doe employww id")

let employee = {};
employee.qq = "qwq"
employee.ww = "qqw"
employee[id] = "vimal";
employee[ide] = "122"

for(keys in employee){
    console.log(keys) // qq,ww
    // //id and ide will be not shown in for...in loop
}
console.log(Object.getOwnPropertySymbols(employee))

*/

/*
//objects to primitive conversion
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      if (hint === "string") return `{name: "${this.name}"}`;
      if (hint === "number") return this.money;
      return this.money; // default (same as number)
    }
  };
  
  alert(user);        // "{name: 'John'}" (string conversion)
  alert(+user);       // 1000 (number conversion)
  alert(user + 500);  // 1500 (default conversion)
  */

