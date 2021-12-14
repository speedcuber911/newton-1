// This functions changes color of the button and enters some text there too
// innerText
// document.write
// window.alert
// console.log
function clickMe() {
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
}

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
