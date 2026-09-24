
/*
Create a function unique(arr) that
should return an array with
unique items of arr.
*/

function unique(arr) {
    let res =  new Set(arr);
    return Array.from(res);
    
}

let values = ["MON","MON","MEN","POKE"];

console.log(unique(values));

// Function to remove anagrams except one

function aclean(arr)
{
    let map = new Map();
    for (word of arr)
    {
        key = Array.from(word.toLowerCase()).sort().join('');
        if (!map.has(key))
        {
            map.set(key,word);
        }
    }
    return Array.from(map.values()).join();
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"