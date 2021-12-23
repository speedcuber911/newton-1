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

function doSomething(){
    let a;    
    a = 5;
    
    var c;
    c = 7;
    // Equal sign '=' is called assignment operator

    // Arithematic operators
    let product  = c*a;    
    let sum  = c+a;    
    let difference  = c-a;    
    let multiplier  = c/a;    

    let b = 1;
    b = b+1;
    // console.log(product, sum, difference, multiplier)

    // Expressions    
    let expressionVal = 5*b+sum-product;
    console.log(expressionVal)

    let firstName = 'Parikshit';
    let secondName = 'nkasn';

    // String concatenation
    let resultString = firstName + "-" + secondName;
    console.log(resultString)
}

function variables(){
    // var name; // declaring
    // name = 'Gaurav' // Assigning
    var name  = "Gaurav";
    console.log(name) //     
    var firstName = "FirstName", 
    secondName="SecondName",
    _class = 10;
    console.log(firstName, secondName, _class);
    var mySpecialVar;
    var mySpecialVar = "special";    
    console.log(mySpecialVar)
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

function clickMe(){
    numberOfSingleClicks++; 
           
    if(numberOfSingleClicks <= 2 || numberOfSingleClicks%2 == 0){  
        document.getElementById('item1').style.color = "green"
    }    
    else if(numberOfSingleClicks>2 && numberOfSingleClicks <= 6 ){        
        document.getElementById('item1').style.color = "blue"
    }
    else if(numberOfSingleClicks >6 && numberOfSingleClicks <= 10){        
        document.getElementById('item1').style.color = "orange"
    }
    else if(numberOfSingleClicks > 10){        
        document.getElementById('item1').style.color = "red"
    }
    else{
        console.log("This happened");
    }

    if(numberOfSingleClicks%2 == 0){    
        document.getElementById('item1').style.fontWeight = 'bolder';
    }
    else{
        document.getElementById('item1').style.fontWeight = '400';
    }

    document.getElementById('item1').innerText = "No. of times clicked:" + numberOfSingleClicks;
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
function fib(){     
    let tNth, tNthMinus1=1, tNthMinus2=0;    
    console.log(tNthMinus2);
    console.log(tNthMinus1);        
    for(let i=0;i<48;i++){                
        tNth = tNthMinus2 + tNthMinus1;
        console.log(tNth);

        tNthMinus2 = tNthMinus1;
        tNthMinus1 = tNth;        
    }    
}
// 52 terms

function tableOf3(){    
    for(let i=0;i<10;i++){
        console.log(3*(i+1));
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

function sayHello(){    
    for(let i=0;i<3;i++)
        console.log("Hello",i);
}
// sayHello();

function sayHelloTo(name){    
    console.log("Hello", name)
}

function sayHelloToPeople(people){    
    for(let i=0;i<people.length;i++)
        console.log("Hello", people[i],"!")            
}

/*
Write a function which takes a number and prints it's table
*/

function printTable(number, till){
    for(let i=0;i<till;i++){
        console.log(number*(i+1));
    }
}
function printTwoTables(number1, number2){
    for(let i=0;i<10;i++){
        console.log("Number1", number1*(i+1), "Number2", number2*(i+1))
    }
}
// printTwoTables(2,3)

let multiplyWithMe = 60;

function multiplyTheseTwoNumbers(num1, num2){    
    console.log(multiplyWithMe);
    return num1*num2;
}
/*
    Difference between parameters and arguments
    multiplyTheseTwoNumbers(4,5)
*/

let myProduct = multiplyTheseTwoNumbers(4,5);
console.log(myProduct);//20

/*
Typed Coercion

let a = 5;
let b = 5;
let c = a+b;
console.log(c)

*/