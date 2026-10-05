let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json();

console.log(commits[0]);

response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
console.log(response.headers.get('Content-Type')); 

for (let [key, value] of response.headers) {
  console.log(`${key} = ${value}`);
}