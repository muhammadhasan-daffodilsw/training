//Using "this" in object literal

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();
console.log(user.ref.name);

function fixedMakeUser() {
    return {
        name : 'John',
        getRef(){return this}
    }
}

user = fixedMakeUser();
console.log(user.getRef().name);
