

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = new FormData(myForm);
    const dataObject = Object.fromEntries(formData.entries());
    console.log("Form Data Object:", dataObject);
})