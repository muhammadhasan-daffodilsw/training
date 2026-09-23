/*Create new Accumulator
Create a constructor function Accumulator(startingValue). */


class Accumulator
{
    constructor(startingValue = 0){
        this.startingValue = startingValue;
    }
    read(a){
        this.startingValue+=a;
        console.log(`Updated Value is ${this.startingValue}`);
    }
}

let accumulator1 = new Accumulator(10);
let accumulator2 = new Accumulator();
accumulator1.read(10);
accumulator2.read(23);
accumulator1.read(-10);