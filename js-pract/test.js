const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//if task cant fail u can ignore reject

async function modifyDoc()
{


    for(let i=0;i<5;i++)
    {
    document.getElementById("test").innerText=str[i];
    await wait(1000);
    }
}


let externalAlert = ()=>{alert("External Alert")};

const str = ['catch','me','if','you','can'];

class User
{
    constructor(username,email)
    {
        this.username=username;
        this.email=email;
    }

    getEmail(){
    
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

}
