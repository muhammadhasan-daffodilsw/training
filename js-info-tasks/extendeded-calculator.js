/*Create an extendable calculator
importance: 5
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in 
the format “NUMBER operator NUMBER” (space-delimited) and returns the result. 
Should understand plus + and minus -.
'Then add the method addMethod(name, func) that teaches the calculator a new operation.
 It takes the operator name and the two-argument function func(a,b) that implements it.
*/


class ExtendedCalculator
{
    constructor(){
        this.methods =
        {
            '+' : (a,b) => (a+b),
            '-' : (a,b)=> (a-b)
        }
    }

    parse(str){
        let op = str.split(' ');
        let a = +op[0];
        let operator = op[1];
        let b = +op[2];

        if (!this.methods[operator])
        {
            console.log('Operation not supported.');
            return;
        }
        if (!Number.isFinite(a) || !Number.isFinite(b))
        {
            console.log('Invalid input');
            return;
        }
        return (this.methods[operator](a,b));
        }

    addMethod(operator,func)
    {
        this.methods[operator]=func;
    }

}

let stuff = new ExtendedCalculator()
console.log(stuff.parse('12 + 134'));
stuff.addMethod('*',(a,b)=>(a*b));
console.log(stuff.parse('12 / 134'));
console.log(stuff.parse('12 * 134'));


