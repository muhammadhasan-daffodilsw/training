/*
Turn the user into JSON and 
then read it back into another variable.
*/

let user = {
  name: "John Smith",
  age: 35
};


let json = JSON.stringify(user);
console.log(json);
let newUser = JSON.parse(json);
console.log(newUser);

/*
Write replacer function to stringify everything, 
but remove properties that reference meetup
*/

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let res =JSON.stringify(meetup, function replacer(key, value) {
  return (key!='' && value == meetup)?undefined:value;
});

console.log(res);

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/