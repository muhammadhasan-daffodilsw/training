/*
Spy decorator
importance: 5

Create a decorator spy(func) that should return 
a wrapper that saves all calls to function in its calls property.

Every call is saved as an array of arguments.
*/

 
function work(a, b) {
  console.log( a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

function spy(func)
{
    function wrapper(...args)
    {
        wrapper.calls.push(args);
        return func.apply(this,args);
    }

    wrapper.calls=[]

    return wrapper
}

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}


/*

Delaying decorator
importance: 5

Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.
*/

function f(x) {
  console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

const wait = (ms) => new Promise((resolve)=>setTimeout(resolve,ms));

function delay(func,ms)
{
    async function wrapper(...args)
    {
        setTimeout(() => func.apply(this, args), ms);
    }

    wrapper.ms = ms;

    return wrapper;

}