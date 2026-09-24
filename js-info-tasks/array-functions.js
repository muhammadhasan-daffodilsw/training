/*
Translate border-left-width to borderLeftWidth

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/

function  camelize(str) {
    let tmp = str.split('-');
    tmp = tmp.map((item,index) => (index!=0) ? (item[0].toUpperCase()+item.slice(1)):item);
    return tmp.join('').trim();
}

tests = [
camelize("background-color") ,
camelize("list-style-image") ,
camelize("-webkit-transition") ,
]

console.log(tests);

/*
Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with values higher or equal to a and lower or equal to b 
and return a result as an array.
The function should not modify the array.
 It should return the new array.' */

function filterRange(arr,a,b)
{
    return arr.filter((value)=>(value>=a && value<= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)

//Sort in decreasing order

arr.sort((a,b)=>b - a);
console.log(arr);


/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((value)=>({'fullName':value.name + ' ' + value.surname,'id':value.id}));


console.log( usersMapped ) 
console.log( usersMapped[0].fullName ) // John Smith


// Shuffle The Array

arr = [1, 2, 3, 4, 5, 6, 7];


for (let i = arr.length - 1; i > 0; i--) {

    let j = Math.floor(Math.random() * (i + 1));
    
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(arr); 


/*
Write the function getAverageAge(users) that gets an array of 
objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.
*/

let res = arr.reduce((res,curr)=>res+curr,0);
console.log(`Avg is ${res/arr.length}`);

// Unique Items

function removeDuplicates(array) {
return arr.filter((a, b) => array.indexOf(a) === b)
};

console.log(removeDuplicates(arr));