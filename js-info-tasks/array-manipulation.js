/*Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value 
should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array. */

let styles = ['Jazz','Blues'];
styles.push("Rock-n-Roll");
console.log(styles.toString());
styles[Math.floor(styles.length/2)] = "Classics";
console.log(styles.toString());
styles.shift();
console.log(styles.toString());
styles.unshift(['Rap','Drill']);
console.log(styles.toString());

/*
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
*/

function sumInput()
{
    let a = [];
    let i;
    let con = true;

    while (con)
    {
        value = prompt('Enter A Number');
        if (value === "" || value === null || !isFinite(value)) break;
        a.push(+value);
    }

    console.log(a.toString);
    
}


/*
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.
*/

function getMaxSubSum(nums)
{
    let currMax = 0;
    let globalMax = 0;
    let n = nums.length;

    for(let i=0;i<n;i++)
    {
        currMax = Math.max(currMax + nums[i],nums[i]);
        globalMax=Math.max(currMax,globalMax);
    }
    return globalMax;

}

let res = [getMaxSubSum([-1, 2, 3, -9]) == 5 ,
getMaxSubSum([2, -1, 2, 3, -9]) == 6,
getMaxSubSum([-1, 2, 3, -9, 11]) == 11,
getMaxSubSum([-2, -1, 1, 2]) == 3,
getMaxSubSum([100, -9, 2, -3, 5]) == 100,
getMaxSubSum([1, 2, 3]) == 6,
getMaxSubSum([-1, -2, -3]) == 0]

console.log(`getMaxSubSum Results ${res}`);

res.splice(2,5,false,false,false);


