/*In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

alert( 6.35.toFixed(1) ); // 6.3
How to round 6.35 the right way? */

console.log((Math.round(6.35*10)/10).toFixed(1));

/*
Repeat until the input is a number
Create a function readNumber which prompts for a number 
until the visitor enters a valid numeric value.
*/

function readNumber(a)
{
    console.log(Number.isFinite(a));
}
readNumber('10');
readNumber(undefined);
readNumber(10);
readNumber()

/*
The built-in function Math.random() creates a random value
 from 0 to 1 (not including 1).

Write the function random(min, max) to 
generate a random floating-point number 
from min to max (not including max).*/

function random(min,max)
{
    return Math.random() * (max - min) + min;
    
}

console.log(random(1,5));