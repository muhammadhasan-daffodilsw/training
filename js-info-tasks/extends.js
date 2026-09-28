
/*
Create a new class ExtendedClock that inherits from Clock and adds the parameter
precision – the number of ms between “ticks”. Should be 1000 (1 second) by default.

Your code should be in the file extended-clock.js
Don’t modify the original clock.js. Extend it.
*/
import Clock from './'
class ExtendedClock extends Clock {

  constructor({ format, precision = 1000 } = {}) {
    super({ format });
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock = new ExtendedClock({ format: 'h:m:s', precision: 2000 });
clock.start();