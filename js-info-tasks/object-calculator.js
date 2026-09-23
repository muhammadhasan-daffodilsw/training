/*Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/

let calculator = {
    a : null,
    b : null,
    read(){
        this.a = prompt('Enter A: '); 
        this.b = prompt('Enter B: ');
    },
    sum(){return this.a + this.b},
    mul(){return this.a * this.b}
}

calculator.a = 10;
calculator.b = 20;
console.log(calculator.sum());
console.log(calculator.mul());

/*
Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.*/

function Calc(a,b){
    this.a = a,
    this.b = b,
    this.read = function (){
        this.a = prompt('Enter A: '); 
        this.b = prompt('Enter B: ');
    },
    this.sum = function(){return this.a + this.b},
    this.mul = function(){return this.a * this.b}   
}

let calc = new Calc(10,20)
console.log(calc.mul());

