// This functions changes color of the button and enters some text there too
// innerText
// document.write
// window.alert
// console.log
// function clickMe() {
//   document.write("My first JS program");
//   document.getElementsByClassName("gridChild2")[0].innerText =
//     "Loading from external file";
//   window.alert("Alert message");
//   console.log("Click me function called");
//   window.print();
//   let a = 5;
//   let b = 6;
//   let c = a + b;
//   console.log(c);
// }

function doSomething() {
  let a;
  a = 5;

  var c;
  c = 7;
  // Equal sign '=' is called assignment operator

  // Arithematic operators
  let product = c * a;
  let sum = c + a;
  let difference = c - a;
  let multiplier = c / a;

  let b = 1;
  b = b + 1;
  // console.log(product, sum, difference, multiplier)

  // Expressions
  let expressionVal = 5 * b + sum - product;
  console.log(expressionVal);

  let firstName = "Parikshit";
  let secondName = "nkasn";

  // String concatenation
  let resultString = firstName + "-" + secondName;
  console.log(resultString);
}

function variables() {
  // var name; // declaring
  // name = 'Gaurav' // Assigning
  var name = "Gaurav";
  console.log(name); //
  var firstName = "FirstName",
    secondName = "SecondName",
    _class = 10;
  console.log(firstName, secondName, _class);
  var mySpecialVar;
  var mySpecialVar = "special";
  console.log(mySpecialVar);
}
/* Let keyword
    1. Cannot be re declared

    Invalid
    let a = 5;
    let a = 6;

    Valid
    var b = 5;
    var b =6;

    2. Blocked scope

    {
        let x = 2;
    }
    let x = 3;
    {
        let x  = 5;
    }

    For var
    {
        var x = 2;
    }
    x=5;

    3. Cannot be hoisted

    function abc(){
        carName = 'abc';
        let x = 5*3;
        let y = 5*7;
        let z = 5*10;
        var carName;
    }
*/

/*
    const Keyword
    1. Blocked scope

    {
        const x = 2;
    }
    const x = 3;
    {
        const x  = 5;
    }
    2. Must be initialised at the time of declration

    Valid:
        const abc = 10;
    Invalid:
        const abc;
        abc = 30
    Valid:
        let def;
        def = 40;
*/

/*
    Operators
    1. Arithematic operators
        -> +,-,/,*,
        -> **, %, ++, --
        2**3 = 8(power of operator)
        16%5 = 1 (Modulus operator)
        let x = 5;
        x++; X becomes 6 | Equivalent of saying x = x+1
        x--; X becomes 5 again | Equivalent of saying x = x-1
    2. Assignment operators
        -> =
        -> += |  x = x+1, x+=1
        -> -= |  x = x-1, x-=1
        -> /= |  x = x/1, x/=1
        -> *=
        -> %=
        -> **= |  x = x**2, x**=2
    3. Comparison operators
        ->  == equal to operator
        ->  === exact equality operator
        -> != not equal to operator
        -> !==  exact not equal to operator
        -> > greater than
        -> < less than
        -> >= greater than equal to
        -> <= less than equal to
    4. Logical operators
        -> && AND operator
        -> || OR operator
        -> ! operator
*/

/*
Printing the table of 2
 console.log(2*1)
 console.log(2*2)
 console.log(2*3)
 console.log(2*4)

 // for loop
 for(let i=0;i<10;i++){
     console.log("Hi");
 }


*/

let numberOfSingleClicks = 0;

function clickMe() {
  numberOfSingleClicks++;

  if (numberOfSingleClicks <= 2 || numberOfSingleClicks % 2 == 0) {
    document.getElementById("item1").style.color = "green";
  } else if (numberOfSingleClicks > 2 && numberOfSingleClicks <= 6) {
    document.getElementById("item1").style.color = "blue";
  } else if (numberOfSingleClicks > 6 && numberOfSingleClicks <= 10) {
    document.getElementById("item1").style.color = "orange";
  } else if (numberOfSingleClicks > 10) {
    document.getElementById("item1").style.color = "red";
  } else {
    console.log("This happened");
  }

  if (numberOfSingleClicks % 2 == 0) {
    document.getElementById("item1").style.fontWeight = "bolder";
  } else {
    document.getElementById("item1").style.fontWeight = "400";
  }

  document.getElementById("item1").innerText =
    "No. of times clicked:" + numberOfSingleClicks;
}

//JS topics covered
/*
1. Intro to JS
    1. JS in the browser
    2. JS can update DOM
2. Structure of a program in JS
3. Variables, literal and identifiers in JS
4. Deep diving into Variables, difference betweeen let, const and var
5. Operators in JS
    1. Arithematic operators
    2. Assignment operators
    3. Comparison operators
    4. Logical operators
6. Control flow in JS programs
    1. if, else-if, else and if/else ladder
    2. Loops in JS
        1. For loop
*/

// Print the first 50 fib numbers
function fib() {
  let tNth,
    tNthMinus1 = 1,
    tNthMinus2 = 0;
  console.log(tNthMinus2);
  console.log(tNthMinus1);
  for (let i = 0; i < 48; i++) {
    tNth = tNthMinus2 + tNthMinus1;
    console.log(tNth);

    tNthMinus2 = tNthMinus1;
    tNthMinus1 = tNth;
  }
}
// 52 terms

function tableOf3() {
  for (let i = 0; i < 10; i++) {
    console.log(3 * (i + 1));
  }
}

/* The While loop

    while(<Condition>){

    }

    function tableOf3WithWhile(){
        let i=1;
        while(i<=10){
            i++;
        }
    }
    function printSomething(){
        let streamLetter = 'a';
        while(streamLetter!='p'){

            //Logic here for changing stream letter
        }
    }
*/

/*
 Print the type of each element in the array
 let x = ['a', 'b', 'c', 1, 2, 3, true, false];
 for(let i=0;i<x.length;i++){
     console.log(typeof x[i]);
 }
*/

/*
Arrays as on 21-12-2021
1. Accessing an element from an array
2. Pushing data/element to an array
// 4th element arr[3]

let arr = [1,2,3,4,5,6]
->make this [2,4,6,8,10,12]
double elements in the array
for(let i=0;i<arr.length;i++)
    arr[i]*=2;

// Add first 10 natural numbers to an empty array
let arr = [];
for(let i=0;i<10;i++){
    arr.push(i+1)
}

let i=1;
while(i<=10){
    arr.push(i);
    i++;
}

// Sum of all elements in the array
let arr = [1,2,3,4,5,6,7,8,9,10]
let sum =0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);

// Find sum of all elements of the array, if that sum is even.
// Print 'event' otherwise print 'odd'
let arr = [1,2,3,4,5,6,7,8,9,10]
let sum =0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

// ternary
// Syntax
// <Condition>?<Statement1>:<Statement2>

let arr = [1,2,3,4,5,6,7,8,9,10]
let sum =0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
(sum%2==0)?console.log('even'):console.log('odd');
if(sum%2==0)
    console.log('even');
else
    console.log('odd');

// Array unshift equivalent of push
let arr = []
for(let i=0;i<10;i++){
    arr.unshift(i+1)
}
// [10,9,8,7,6,5,4,3,2,1]


// arr = [10,9,8,7,6,5,4,3,2,1]
// Remove last 3 elements from the array
for(let i=0;i<n;i++)
        arr.pop();

// shift for removing elements from start

// Remove 3 elements from both start and end of the array
for(let i=0;i<n;i++){
    arr.shift();
    arr.pop();
}

// Reverse of an array
let arr = [1,2,3,4,5];
arr.reverse();
let arr2=[];
for(let i=0;i<arr.length;i++){
    arr2.unshift(arr[i]);
}

// Join
let arr = [1,2,3,4,5];
'12345'
let str = '';
for(let i=0;i<arr.length;i++)
    str = str+arr[i]

// Concat
let arr1 = [1,2,3], arr2 = [4,5,6]
[1,2,3,4,5,6]
arr1.concat(arr2);

// Finding an element in the array
let num = 12;
let arr = [1,2,3,4,5,11,15,17,18,31];
let ajay=0;
for(let i=0;i<arr.length;i++){
    if(arr[i] === num){
        ajay = 1;
    }
}
(ajay==0)?console.log('Does not exist'):console.log("Exists");

arr.includes(num)
*/
/*
reverse push, pop, shift, unshift, join

slice
let arr = [1,2,3,4,5,6];
arr.slice(0,3) // Last element is not considered
let x = 2, y=4;
let newArr = []
for(let i=x;i<y;i++){
    newArr.push(arr[i])
}
splice
*/
/*
 Functions
*/

function sayHello() {
  for (let i = 0; i < 3; i++) console.log("Hello", i);
}
// sayHello();

function sayHelloTo(name) {
  console.log("Hello", name);
}

function sayHelloToPeople(people) {
  for (let i = 0; i < people.length; i++) console.log("Hello", people[i], "!");
}

/*
Write a function which takes a number and prints it's table
*/

function printTable(number, till) {
  for (let i = 0; i < till; i++) {
    console.log(number * (i + 1));
  }
}
function printTwoTables(number1, number2) {
  for (let i = 0; i < 10; i++) {
    console.log("Number1", number1 * (i + 1), "Number2", number2 * (i + 1));
  }
}
// printTwoTables(2,3)

let multiplyWithMe = 60;

function multiplyTheseTwoNumbers(num1, num2) {
  // console.log(multiplyWithMe);
  return num1 * num2;
}
/*
    Difference between parameters and arguments
    multiplyTheseTwoNumbers(4,5)
*/

let myProduct = multiplyTheseTwoNumbers(4, 5);
// console.log(myProduct);//20

/*
Typed Coercion

let a = 5;
let b = 5;
let c = a+b;
console.log(c)

1. String conversion (In case of + operator)
Whatever you add to a string becomes a string (Number, Boolean)

2. NUmber conversion (IN case of -,%,/ operators)

3. Boolean to Number
false -> 0
true -> 1

*/

// mirrorMaze(mirror, "Tarun")
function mirrorMaze(mirrorMe, normalString) {
  console.log("Reverse of", normalString, "is", mirrorMe(normalString));
}
let mirror = (str) => str.split("").reverse().join("");
function mirrorMaze(mirrorMe, siddiq) {
  console.log("Reverse of", siddiq, "is", mirrorMe(siddiq));
}
// mirrorMaze(mirror, "Tarun")
// mirror('mayank')

/*
    Functions of an object OR, keys of an object which are functions are called methods
    Array iterative methods

    Callback function
    1. forEach method
    Print the number of odd Numbers in the array
    arr.forEach((elem, index) => {
    if(elem%2==1)
        console.log(elem, "is at index", index);
    })
    Count the number of odd Numbers in the array
    let countNumberOfOdds = 0;
arr.forEach((elem, index) => {
    if(elem%2==1){
       countNumberOfOdds++;
        console.log(elem, "is at index", index);
    }
})
    2. filter
    cars.filter(car => {
    if(car.hp>=2)
        return true;
})

arr.filter((ele,index) => {
    if(index%2==0)
         return true;
})
    3. map
    cars.map(car => car.name)
    nums = [1,2,3,4,5] // Multiply each element by 3
    nums.map(ele => 3*ele)
    Converting original array of numbers to array of objects with value as Mod of 3
    arr.map( (el,i) => ({position:i, value: el%3}))

    4. find

    let cars=[{name:"A", hp:5}, {name:"B", hp:3}, {name:"C", hp:2}, {name:"D", hp:8}, {name:"E", hp:7}, {name:"F", hp:0}, {name:"G", hp:9}]
    let myCar = cars.find(car => (car.hp==0))
    arr.find(el => (el===7))

    5. findIndex
    Works exactly like find, returns index instead of element.

    6. some
    Finding if their is some element which is disvisble by 2
    arr.some(el => el%2==0)

    7. every
        arr.every(el => el%2==0) // Checks if every element is even or not

    8. reduce

    Has 4 parameters in the callback function
    1. accumulation
    2. element
    3. index
    4. array

    let initialVal = 0;
    let arr = [1,2,3,4,5]
    // summing up elements

    const sum = arr.reduce((acc,element) => {
     return (acc+element);
    },initialVal)

    console.log(sum)//6

    // Get all odd elements from an array using reduce
    let arr = [1,2,3,4,5]
    arr.reduce((acc,el) => {
        if(el%2==1){
            acc.push(el);   // [1,3]
        }
       return acc;
    }, [])
 */
/*
    Closures

    let myGlobalVar = 1;
    function addOne(){
        let myVar = 1;
        console.log(myGlobalVar);
        return (myVar+1);
    }
    addOne();
    console.log(myGlobalVar);

    function addOneToNumber(num){
        return num+1;
    }
    console.log(addOneToNumber(3))

    function addNumberToNumber(num1)
    {
        return function (num2) {
            return num1+num2;
        }
    }
    const addNumberToNumber = (num1) =>  (num2) => num1+num2;

    addNumberToNumber(10)// function
    addNumberToNumber(10)(12)


    const add1ToNumber = addNumberToNumber(1)
    const add2ToNumber = addNumberToNumber(2)
    const add3ToNumber = addNumberToNumber(3)

    add1ToNumber(9)
    add2ToNumber(8)
    add3ToNumber(7)

    function sayHello(){
        let name = "Amit";
        function displayHello(){
            console.log("Hello", name);
        }
        displayHello();
    }

   function sayHello(){
        let name = "Amit";
        return function (){
            console.log("Hello", name);
        }
    }
    // lexical/block (let/const)
    // functional scope (var)
    sayHello()() //

    function myName(name){
        if(name.length > 5) {
            var nameLength = name.length;
            let twiceOfNameLength = nameLength*2;
            console.log("You have long name",nameLength,twiceOfNameLength);
        }
        console.log(nameLength,twiceOfNameLength)
    }

*/

/*
    Math
    Math has constants/Properties

    Math has behaviors/functions

    1. Math.round -> rounds off
    2. Math.ceil -> computes ceiling of a decimal
    3. Math.floor -> computes floor of a decimal
    4. Math.trunc -> eliminate the decimal portion
    5. Math.sign -> Returns -1/1 depending on -ve or +ve number
    6. Math.pow -> Raise to power. Works exactly like "**" operator
    7. Math.sqrt -> square root function
    8. Math.abs for absolute value
    9. Math.min and Math.max takes numbers as arguments
    10. Math.random gives a random decimal between 0 and 1.


    // Create a function which returns a random value between a & b

    function getRandomBetween(a,b){

    }

    getRandomBetween(1,100);

    0 < Math.random() < 1

    0 < Math.random()*100 < 100

*/

/*
    Dates
    1. epoch timestamp
      represents the milliseconds elapsed since 1970
      Date.now();
    2.
        new Date() // Gives current date
        new Date(2020,01,20, 21, 30,30) // time/calendar parameters. 20, Feb 2020 // Month is 0 indexed
        new Date('') // ISO date "2022-01-26T13:15:00" // Month is not 0 indexed here
        new Date(epochTime) //

        Getting to any date format by the means of string concatenation

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
Tue Dec 01 2020 00:00:00 GMT+0530 (India Standard Time)
"1 December, Tueday 2020"
'1 December, Tueday 2020'
t.getDay()
2
days[t.getDay()]
'Tuesday'
let day = days[t.getDay()]
'Tuesday'
let month = "December"
let date = t.getDate()
"1 December, Tueday 2020"
'1 December, Tueday 2020'
date+ " " + month + ", " + day + " " + t.getFullYear()
'1 December, Tuesday 2020'
"01/12/2020"
'01/12/2020'
date + "/" + t.getMonth()+1 + "/" + t.getFullYear()
date + "/" + (t.getMonth()+1) + "/" + t.getFullYear()
'1/12/2020'
t.getUTCMonth()
10
t.getHours()
0
// .momentJS
    function giveTheNextDate(date){
    let epochForTomorrow = date.getTime() + 24*60*60*1000;
    let dateForTomorrow = new Date(epochForTomorrow)

    let year = dateForTomorrow.getFullYear();
    let month = dateForTomorrow.getMonth() + 1;
    let day = dateForTomorrow.getDate();
    return year + "-" + month + "-" + day
    }
    const today = new Date();
    // -> giveTheNextDate(today)
 */
/*
    const car = {
        color:'red',
        engineCC: 1000,
        weight: 900,
        type:"sedan"
    };
    function stringifyCar(car){
       return "color:"+car.color+ ",engineCC:" +car.engineCC +",weight:" + car.weight;
    }

    function stringifyCarImproved(car){
       let carKeys = Object.keys(car);
       let finalAnswer = [];
       carKeys.forEach((ele,i) => {
            finalAnswer.push(ele+":"+car[ele]);
       })
       return finalAnswer.join(',');
    }

    const stringifyCarFurtherImproved = (car) => Object.keys(car).reduce((acc,ele) => {
        acc.push(ele+":"+car[ele])
        return acc;
       },[]).join(',')

const stringifyCarFurtherImproved = (car) =>
        Object.keys(car).reduce((acc,ele) => {
            acc += (ele+":"+car[ele])
            return acc;
           },'')

 const stringifyCarFurtherImproved = (car) =>
        Object.keys(car).reduce((acc,ele) =>
            acc + (ele+":"+car[ele]+",") ,'')

const stringifyUsingEntries = car => Object.entries(car).map(el => el[0]+":"+el[1]).join(',')
JSON.stringify(car) // to get a stringified view of object

-> Constructor functions
Date.now()
Math.floor()
Object.keys()

new Date()

function createCar(color, size, engine){
    return {
        color, size, engine
    };
}

// Getting to a constructor function
    function createCar(color, size, engine){
    return {
        color,
        size:size,
        engine,
    };
}

// Applying default properties
function createCar(color, size, engine, applyAutoBreaks){
    return {
        color,
        size:size,
        engine,
        drive: () => console.log('drive'),
        horn: () => console.log('Peep-peep'),
        applyAutoBreaks
    };
}

// constructor function
function car(color, size, engine){
    this.color = color;
    this.size = size;
    this.engine = engine
}


// Internal working of constructor functions

// constructor function
// 1st use-case of "this"
function car(color, size, engine){
    // this = {}
    this.color = color;
    this.size = size;
    this.engine = engine
    // return this
}

const car = {
  color: "red",
  fuel : 10,
  drive() {
    console.log(this);// "this" here refers to owning object
  }
};

const car = {
  color: "red",
  fuel : 10,
  drive() {
    this.fuel = this.fuel-1;
    console.log("Fuel reduced to", this.fuel)
    return this.fuel
  }
};

 */
/*

    Accessor methods in objects
        - Setters (Setting some value)
        - Getters (Getting some value)

const car = {
  color: "red",
  fuel : 10,
  name: "M3"
};

console.log(car.name)

// setter function
const car = {
  color: "red",
  fuel : 10,
  name: "M3",
  power://
  terrain: //,
  fuelType: //
  set carName(newName) {
    this.name = newName
},
 get fullName(){
    this.name+ this.color
 },
get computedMilleage(){
        ...
       return
 },
 computeMilleage () {

 }
  updateName(newName) {
    this.name = newName;
    return this.name
}
car.carName = "C7"
car.updateName("C7")
car.computedMilleage
car.computeMilleage()
};
 */

/*
    String methods
    let name = "abcDefghi";

    slice and substr (Any string methods will not mutate(change) the original string)
    - slice takes start and end indexes. Can take negative values
    - substr takes start index and number of characters to be extracted. Cannot take negative values

 substring is simillar to slice
 - starting index and ending index. Does not take negative values

- replace
- replaceAll
- toUpperCase
- toLowerCase

function convertFirstCharToUpper(name){
//
    return name.substr(0,1).toUpperCase()+sentence.slice(1) .toLocaleLowerCase()
}
convertFirstCharToUpper('parikshit')
// Parikshit
- concat method
- trim
- padStart & padEnd

- Template literal :`The day has ${24*60*60} seconds`
 */

/*
    BOM (browser object model)
    DOM (Document object model)
    - Accessing/Getting/Selecting DOM nodes
    > byID: document.getElementById
    > byClass: document.getElementsByClassName
    > byTagName: document.getElementsByTagName
    > byQuery: document.querySelector(gives single element selected by query)
    || document.querySelectorAll(gives all
 elements selected by query)

 let t = null;
 console.log(t)

Appending a DOM node to gridParent Div

let newDiv = document.createElement('div')
newDiv
newDiv.innerText = 'Item 4'
'Item 4'
newDiv
newDiv.getAttribute('class')
newDiv.setAttribute('class','gridChild')
<div class=​"gridChild">​Item 4​</div>​
document.getElementsByClassName('gridParent')
HTMLCollection [div.gridparent]
document.getElementsByClassName('gridParent')[0]
let parentDiv = document.getElementsByClassName('gridParent')[0]
parentDiv.appendChild(newDiv)
document.getElementsByClassName('gridParent')
document.getElementsByClassName('gridParent')[0]
<div class=​"gridParent">​…​</div>​ grid 

function renderGridNodes(numberOfNodesToRender){


}

renderGridNodes(9)
 */

function checkMe() {
  const valueOfInput = document.getElementsByTagName("input")[0].value;
  if (valueOfInput === "") {
    document.getElementById("heading").innerText = "Error";
    document.getElementById("heading").style.color = "red";
    return;
  }
  const numericValue = Number(valueOfInput);
  if (numericValue % 2 === 0) {
    document.getElementById("heading").innerText = "Yes";
    document.getElementById("heading").style.color = "green";
  } else {
    document.getElementById("heading").innerText = "No";
    document.getElementById("heading").style.color = "red";
  }
}

/*

    Event listeners in DOM
    // Click listener    
document.getElementsByClassName('gridParent')[0].addEventListener('click', _ =>  {
  console.log("Div clicked")
})
*/

/*
 DOM events
// Mouse Listners
// KeyBoard events
// Touch events
// Window events

document.getElementsByClassName('gridParent')[0].addEventListener('click', () => {
 document.getElementsByClassName('gridParent')[0].innerText = "I was clicked"   
}) // Changing the inner text of a div
*/

// const myButton = document.getElementById('button');
// const divContainer = document.getElementsByClassName('gridParent')[0];

// let mouseEnabled = false;
// const flipSwitch = () => mouseEnabled = !mouseEnabled

// //code 1

// const mouseEnterHandler = () => { console.log('enter');divContainer.innerText = 'Mouse on me'}
// const mouseOutHandler = () => { console.log('left');divContainer.innerText = 'Mouse not on me!'};

// myButton.addEventListener('click', () => {
//     console.log("Running")
//     const heading = document.getElementById('heading')
//     if(!mouseEnabled)//
//         {
//         myButton.innerText = "Enable Mouse"
//         flipSwitch();
//         heading.innerText = heading.innerText.replace('Disabled','Enabled')
//         divContainer.addEventListener('mouseenter', mouseEnterHandler);
//         divContainer.addEventListener('mouseout', mouseOutHandler)
//         }
//     else
//        {
//            myButton.innerText = "Disabled Mouse"
//            flipSwitch();
//            heading.innerText = heading.innerText.replace('Enabled', 'Disabled')
//            divContainer.removeEventListener('mouseenter', mouseEnterHandler)
//            divContainer.removeEventListener('mouseout', mouseOutHandler)
//         }
// });

/*
myButton.addEventListener('click', () => {        
    myButton.innerText = switchButton?"Disable Mouse":"Enable Mouse";                
    flipSwitch();       
});
*/

const gridParent = document.getElementsByClassName("gridParent")[0];
const outerMostDiv = document.getElementsByClassName("gridChild1")[0];
const middleDiv = document.getElementsByClassName("gridChild2")[0];
const innerMostDiv = document.getElementsByClassName("gridChild3")[0];
const bodyOfHTML = document.getElementsByTagName("body")[0];

// bodyOfHTML.addEventListener('click', (event) => {
//     console.log("Click on body");
//     console.log(event.target, event.currentTarget);
// })

// outerMostDiv.addEventListener('click', (event) => {
//     // console.log(event.target, event.currentTarget);
//     console.log("Click on outerMostDiv");
// })

// outerMostDiv.addEventListener('mouseover', (event) => {
//     // console.log(event.target, event.currentTarget);
//     console.log("Mouse on outerDiv");
// })

// middleDiv.addEventListener('mouseover', () => {
//     // console.log(event.target, event.currentTarget);
//     console.log("Mouse on middleDiv");
// })

// middleDiv.addEventListener('click', (event) => {
//     // console.log(event.target, event.currentTarget);
//     console.log("Click on middleDiv");
// })

// innerMostDiv.addEventListener('click', (event) => {
//         event.stopPropagation()
//     console.log("Click on innerMostDiv");
// })

gridParent.addEventListener("click", (event) => {
  const heading = document.getElementById("heading");
  if (event.target === event.currentTarget) {
    heading.innerText = `Please click only on inner elements!`;
    return;
  }
  const targetText = event.target.innerText;
  heading.innerText = `Click on: ${targetText}`;
});

// Principle of bubbling

//Prototype

let animal = {};
animal.name = "Lion";
animal.power = 100;

animal.eat = function (foodQuantity) {
  console.log("Animal eats");
  this.power += foodQuantity;
};
animal.run = function (time) {
  console.log("Animal runs");
  this.power -= time;
};
animal.rests = function (time) {
  console.log("Animal is resting");
  this.power += time;
};

// Functional instantiation
function Animal(name, power) {
  let animal = {};

  animal.name = name;
  animal.power = power;

  animal.eat = function (foodQuantity) {
    console.log("Animal eats");
    this.power += foodQuantity;
  };
  animal.run = function (time) {
    console.log("Animal runs");
    this.power -= time;
  };
  animal.rests = function (time) {
    console.log("Animal is resting");
    this.power += time;
  };

  return animal;
}

let lion = Animal("Liony", 100);
let dog = Animal("Doggy", 20);

// Functional instantiation with shared methods

const sharedAnimalMethods = {
  eat: function (foodQuantity) {
    console.log("Animal eats");
    this.power += foodQuantity;
  },
  run: function (time) {
    console.log("Animal runs");
    this.power -= time;
  },
  rests: function (time) {
    console.log("Animal is resting");
    this.power += time;
  },
};

function AnimalI(name, power){
  let animal = {};
  animal.name = name;
  animal.power = power;

  animal.eat =  sharedAnimalMethods.eat;
  animal.run =  sharedAnimalMethods.run;
  animal.rests = sharedAnimalMethods.rests;

  return animal;
}
let lionI = AnimalI("Liony", 100);
let dogI  = AnimalI("Doggy", 20);

// Object.create
// Creates an object, which delegates to another object on failed lookups

const parent = {
    name: "Abc",
    age: 49,
    nationality: "Indian"
}

const child = Object.create(parent); // {}

child.name =  "Def";
child.age=  9;

child.nationality


const sharedAnimalMethodsI = {
  eat: function (foodQuantity) {
    console.log("Animal eats");
    this.power += foodQuantity;
  },
  run: function (time) {
    console.log("Animal runs");
    this.power -= time;
  },
  rests: function (time) {
    console.log("Animal is resting");
    this.power += time;
  },
};

function AnimalII(name, power){
  let animal = Object.create(sharedAnimalMethodsI);
  animal.name = name;
  animal.power = power;
  return animal;
}

let lionII = AnimalII("Liony", 100);
let dogII  = AnimalII("Doggy", 20);

// Prototype
// Functional property referencing an object is protype


// Prototypal instantiation

function AnimalIProto(name, power){
  let animal = Object.create(AnimalIProto.prototype);
  animal.name = name;
  animal.power = power;
  return animal;
}

AnimalIProto.prototype.eat= function (foodQuantity) {
  console.log("Animal eats");
  this.power += foodQuantity;
};

AnimalIProto.prototype.run= function (time) {
  console.log("Animal runs");
  this.power -= time;
};

AnimalIProto.prototype.rests =  function (time) {
  console.log("Animal is resting");
  this.power += time;
};

let lionIProto = AnimalIProto("Liony", 100);
let dogIProto  = AnimalIProto("Doggy", 20);

lionIProto.roar = function () {
  console.log("lion roars")
}

dogIProto.bark = function () {
  console.log("dog barks")
}

lionIProto.roar()
lionIProto.eat()



// Pseudo-classical Instantiation
function Animal(name, energy){
  // this = Object.create(Animal.prototype)
  this.name = name;
  this.energy = energy;
  // return this;
}

Animal.prototype.eat= function (foodQuantity) { 
  console.log("Animal eats");
  this.power += foodQuantity;
};

Animal.prototype.run= function (time) {
  console.log("Animal runs");
  this.power -= time;
};

Animal.prototype.rests =  function (time) {
  console.log("Animal is resting");
  this.power += time;
};

let lion = new Animal('Lion', 100);
lion.eat(100);

// class

class AnimalC{ //  Syntactical sugar
  constructor(name, energy){
    this.name = name;
    this.energy = energy;
  }

eat(foodQuantity) { 
  console.log("Animal eats");
  this.power += foodQuantity;
  }

run(time) {
  console.log("Animal runs");
  this.power -= time;
  }

rests(time) {
  console.log("Animal is resting");
  this.power += time;
  }
}

let lionC = new AnimalC("Lionny", 100);


// Array methods

const myArr = []; //  Syntactical sugar
const myArr2 = new Array();
myArr.forEach(x => console.log(x))
myArr.map(x => console.log(x))


class AnimalC{ //  Syntactical sugar
  constructor(name, energy){
    this.name = name;
    this.energy = energy;
  }

eat(foodQuantity) { 
  console.log("Animal eats");
  this.power += foodQuantity;
  }

run(time) {
  console.log("Animal runs");
  this.power -= time;
  }

rests(time) {
  console.log("Animal is resting");
  this.power += time;
}

static findTopAnimals(animalsArr){
  return animalsArr.sort( (lion1,lion2) => 
    (lion2.power - lion1.power)).slice(0,3)
}

static sayHi(){
  console.log("I am an Animal class")
}
  
}

// function findTopAnimals(animalsArr){
//   return animalsArr.sort( (lion1,lion2) => (lion2.power - lion1.power)).slice(0,3)
// }

// let lionC = new AnimalC("Lionny", 100);
// let lionD = new AnimalC("Lionny2", 90);
// let lionE = new AnimalC("Lionny3", 120);
// let lionF = new AnimalC("Lionny4", 60);
// AnimalC.findTopAnimals([lionC, lionD, lionE, lionF])


// Static using functions


function Animal(name, energy){
  // this = Object.create(Animal.prototype)
  this.name = name;
  this.energy = energy;
  // return this;
}

Animal.prototype.eat= function (foodQuantity) { 
  console.log("Animal eats");
  this.power += foodQuantity;
};

Animal.prototype.run= function (time) {
  console.log("Animal runs");
  this.power -= time;
};

Animal.prototype.rests =  function (time) {
  console.log("Animal is resting");
  this.power += time;
};

let lionD = new Animal("Lionny2", 90);
let lionE = new Animal("Lionny3", 120);
let lionF = new Animal("Lionny4", 60);

Animal.findTopAnimals = function(){
  // ...s
}
Animal.findTopAnimals([lionC, lionD, lionE, lionF]);
//


1. `
The prototype object will have a constructor property 
which points to the original function or the
class that the instance was created from
`
2. `Object.getPrototypeOf(lionC) === Animal.prototype;`

// __proto not to be used anymore, older/deprecated way of getting prototype


// property1
// Distinguish, whether the property lies on prototype or the instance itself

//Object.keys()// actual keys not on prototype
//Object.getPrototypeOf()// keys only on the prototype

// lionC.hasOwnProperty('nameOfProperty')
// Prototype chain

//checking if it's an instacne of class
// class AnimalC{

// }
// lionC 
// Object.getPrototypeOf(lionC) === Object.getPrototypeOf(AnimalC)
// lionC instanceOf AnimalC

function Animal(name, energy){  
  // this = Object.create(Animal.prototype)
  this.name = name;
  this.energy = energy
  //retur this
}

const lionD = Animal("Abc", 100);
lionD.name

function Animal(name, energy){    
  if(this instanceof Animal === false){
      console.log("Did you miss writing new?")
      return;
  }
  this.name = name;
  this.energy = energy
}

const lionD = Animal("Abc", 100);

function Animal(name, energy){    
  if(this instanceof Animal === false){
      return new Animal(name, energy);
  }
  this.name = name;
  this.energy = energy
}
const lionD = Animal("Abc", 100);

// Creating your own Object.create
//  child = Object.create(parent)

Object.create = function(parentObj){
  function myFn(){};
  myFn.prototype = parentObj;
  return new myFn()  
}

// Prototype chain & JS inheritance

function Dog(name, energy, breed){
  this.name = name;
  this.energy = energy;
  this.breed = breed;  
}



Dog.prototype.eat = function(){}
Dog.prototype.rests = function(){}
Dog.prototype.sleep = function(){}

Dog.prototype.bark = function(){}

const tommy = new Dog();
tommy.eat();
tommy.bark();

function Cat(name, energy, hairColor){
  this.name = name;
  this.energy = energy;
  this.hairColor = hairColor;      
}
Cat.prototype.eat = function(){}
Cat.prototype.rests = function(){}
Cat.prototype.sleep = function(){}

Cat.prototype.meow = function(){}

function Animal(name, energy){  
  this.name = name;
  this.energy = energy;  
}

Animal.prototype.eat= function (foodQuantity) { 
  console.log("Animal eats");
  this.power += foodQuantity;
};

Animal.prototype.run= function (time) {
  console.log("Animal runs");
  this.power -= time;
};

Animal.prototype.rests =  function (time) {
  console.log("Animal is resting");
  this.power += time;
};


//this
function Dog(name, energy, breed){
  // this = Object.create(Dog.prototype) // dog-this {} t  
  Animal.call(this, name, energy);  
  this.breed = breed;    
  // return this (dog-this)
}
Dog.prototype = Object.create(Animal.prototype); // {}
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Barking")
};

const tommy = new Dog('tommy', 10, 'Labradoodle')
tommy.eat();


class Animal{ //  Syntactical sugar
  constructor(name, energy){
    this.name = name;
    this.energy = energy;
  }

eat(foodQuantity) { 
  console.log("Animal eats");
  this.power += foodQuantity;
  }

run(time) {
  console.log("Animal runs");
  this.power -= time;
  }

rests(time) {
  console.log("Animal is resting");
  this.power += time;
  }
}

class Dog extends Animal {
  constructor(name, energy, breed){
    super(name, energy); // Animal.call(this, name, energy)
    this.breed = breed;
  }
  bark(){
    console.log("Barking")
  }
}
//extends


// Objects, creating new objects and inheriting properties from other objects


// Asynchronous JS

[1,2,3,4,5,6]

// T1: ^
// T2: ^

// concurrency issues, datastructure corruption


// Synchronous or sync task 
// Asynchony -> Environment, which is providijng this capability 

// Main thread

const task1 = () => {
  console.log("Ran task1");
}

const task2 = () => {
  console.log("Running task2")
  task1();
  console.log("Completed task1")
  console.log("Completed task2")
}

task2();

// Execution context
// Call stack

//LIFO Last in first out


// |__console.log("Running task2")_______| 
// |_task2_______________________________|

// |_______console.log("Ran task1");_____|

// |_______task1()____________| 
// |_task2_______________________________|


// |__|


const resizeImage = image => {
  // 

  //
  return;
}

const postImage = image => {
  //  ... Network access

  //
  return;
}

const successMessage = () => {
  console.log("Image resized and uplaoded");
}

resizeImage(image);
postImage(image)
successMessage();

// Computing times in JS
console.time('timeTaken');
[...new Array(10**8)].map(el => el);
console.timeEnd('timeTaken');

// setTimout
// setInterval


setTimeout(() => {
    console.log("1")    
  const result = task1();
  task2(result)
    // This line
}, 2000)


// [...new Array(10**8)].map(el => el);// 4s
console.log("HI")


document.getElementById('id').addEventListener('click', () => {
});

// fetch, xmlHTTPRequest. Getting data from a remote server


setTimeout(() => {
  console.log("1")
}, 0);
  
console.log("2")








let myId = setInterval( () => {},100);



let sTId = setTimeout(() => {
  clearInterval(myId);;
}, 30*60*1000);
clearTimeout(sTId);



function Dog(){  

  this.eat = () => {

  }  
this.rests = () => {
    
  } 
}


let d1 = new Dog()
let d2 = new Dog()
let d3 = new Dog()



// 2
// 2*10**4 -> 20,000
