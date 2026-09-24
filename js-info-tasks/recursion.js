/*
Write a function sumTo(n) that calculates 
the sum of numbers 1 + 2 + ... + n.
*/

function sumTo(n){
    return (n==0)?0:n+sumTo(n-1);
}

console.log(sumTo(3));