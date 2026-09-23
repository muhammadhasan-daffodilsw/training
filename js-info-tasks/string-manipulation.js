//Uppercase the first character

let s = 'hello'

console.log(s[0].toUpperCase()+ s.slice(1));

/* 
Truncate the text
Create a function truncate(str, maxlength) that checks the length of the str and,
if it exceeds maxlength – replaces the end of str with the ellipsis character "…",
to make its length equal to maxlength.
*/

function truncate(str,maxlength)
{
    let l = str.length;
    if (l > maxlength)
    {
        return str.slice(0,maxlength) + '...'
    }
    return str;
}

console.log(truncate('Hello world widiwh hiwhfihw',10));

/*
Create a function extractCurrencyValue(str) that
 would extract the numeric value from such string and return it.
 */
let c = '$130';

function extractCurrencyValue(c)
{
    console.log(parseInt(c.slice(1)));
}
extractCurrencyValue(c);