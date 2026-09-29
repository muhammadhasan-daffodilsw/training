function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z

function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value

generator.next(4);


/*
Pseudo-random generator

There are many areas where we need random data.

One of them is testing. We may need random data: text, numbers, etc. to test things out well.

In JavaScript, we could use Math.random(). But if something goes wrong, 
we’d like to be able to repeat the test, using exactly the same data.

For that, so called “seeded pseudo-random generators” are used. 
They take a “seed”, the first value, and then generate the next ones using a formula so that the same seed yields the same sequence, 
and hence the whole flow is easily reproducible. We only need to remember the seed to repeat it.

An example of such formula, that generates somewhat uniformly distributed values:

next = previous * 16807 % 2147483647

*/


function* pseudoRandom(seed)
{
    while (true)
    {
        seed = seed * 16807 % 2147483647;
        yield seed;
    }
}

generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073