/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/

let user = {};
user['name'] = 'John';
user.surname = 'Smith';
user.name='Pete';
console.log(`${user.name} ${user.surname}`);
delete user['name'];
console.log('name' in user)

/*
Write the function isEmpty(obj) which returns true if the object has no properties, 
false otherwise.
*/
function isEmpty(obj)
{
    for (key in obj)
    {
        return false;
    }
    return true;
}
console.log(isEmpty(user));
delete user['surname'];
console.log(isEmpty(user));

/*
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let total = 0;
for (salary in salaries)
{
    total+=salaries[salary]; 
}
console.log(total);

// Multiply numeric property values by 2
let stuff = {
  'string_property' : 'hello',
  'numeric_property' : 10
};
for (key in stuff)
{
    stuff[key] = typeof stuff[key] == 'number'? stuff[key]*2:stuff[key];
}
console.log(stuff);


/*
Chaining
importance: 2
There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Modify the code of up, down, and showStep to make the calls chainable */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    console.log( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();


