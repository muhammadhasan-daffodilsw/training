/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
  Rewrite it, to perform the same, but without if, in a single line.
Make two variants of checkAge:
Using a question mark operator ?
Using OR ||
*/

//using ?

function checkAge(age){return (age>18)? true:confirm('Did parents allow you?');};

function checkAge(age){
    return (age>18 || confirm('Did parents allow you?'));
}

checkAge(12);

/*
Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);*/


let ask = (question,yes,no)=>  confirm(question)?yes():no();
ask("Ask somethin?",()=>alert('You agreed'),()=>alert('One can only dream.'));
