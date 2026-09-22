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

let str = ['catch','me','if','you','can'];
