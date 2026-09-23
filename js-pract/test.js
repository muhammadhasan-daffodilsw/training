const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//if task cant fail u can ignore reject

async function modifyDoc()
{

    /*
    for(item of str)
    {
    document.getElementById("test").innerHTML=item;
    await wait(500);
    }
    */
    let limit = +prompt("Count Till?",0);
    let i = 0;
    while (i<limit)
    {

        if (i%2 == 0)
        {
        document.getElementById("test").innerHTML=`<b>${i}</b>`;
        }
        else
        {
        document.getElementById("test").innerHTML=`<em>${i}</em>`;
        }
        await wait(500);
        i++;
    }
}


let externalAlert = ()=>{alert("External Alert")};

const str = ['one','two','three','four','five'];

class User
{
    constructor(username,email)
    {
        this.username=username;
        this.email=email;
    }
    
    print()
    {
        alert(`Hello ${user.username}`);
    }
}

let user = new User("idk","email");
console.log(typeof user);
console.log(typeof str);

function test_text_embedding(){
alert(`hello ${user.username}`);
alert('hello ${user.username}');
}

function test_prompts(){
    let a= prompt('Enter Two Numbers,spaced').split(' ');
    a = a.map(Number);
    alert(a[0]+a[1]);
    let b = '6';
    alert(5+b);
    alert(5-b);

}

function test_conditions()
{
    (prompt('Enter A Number') % 2 == 0)? alert('Even') : alert('Odd');
}



function createUser()
{
    user.username = prompt("Enter a Name");
    user.email = prompt("Enter an email");
    user.print();
}

function showUser()
{
    user.print();
}

function calculatePow()
{
    let a = prompt('Enter The Numbers spaced').split(' ').map(Number);
    if (a.length != 2)
    {
        alert('Invalid input');
    }

    x = a[0];
    y = a[1];
    alert(findPow(x,y));
}

function findPow(x,n)
{

    if (n==1)
    {
        return x;
    }
    if (n==0)
    {
        return 1;
    }
    if (n % 2 != 0)
    {
        return findPow(x*x,Math.floor(n/2)) * x;
    }
    return findPow(x*x,Math.floor(n/2));
}
