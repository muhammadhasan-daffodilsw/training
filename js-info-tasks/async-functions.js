async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();

/*
Rewrite Using Async And Await
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404
*/


async function loadJson(url)
{
    let res = await fetch(url);
    if (res.status == 200)
    {
        return res.json();
    }
    else{
        throw new Error(res.status);
    }
}

loadJson('https://javascript.info/no-such-user.json').catch(console.log);


/*
Call async from non-async

We have a “regular” function called f. 
How can you call the async function wait() and use its result inside of f?
*/
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
 
    wait().then(console.log);

}
