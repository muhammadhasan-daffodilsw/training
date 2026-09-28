
/*
Write a function printNumbers(from, to) that outputs a number every second,
starting from from and ending with to.

Make two variants of the solution.

    Using setInterval.
    Using nested setTimeout.
*/

function printNumbers(from, to)
{

    let intervalId = setInterval(()=>{
        console.log(from)
        if (from == to)
        {
            clearInterval(intervalId);
        }
        from++;
    },1000)
}

//printNumbers(1,100);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

async function printPromise(from,to) {
    if (from < to)
    {
        console.log(from);
        from++;
        await delay(1000);
        return printPromise(from,to);
    }
}

printPromise(1,100);