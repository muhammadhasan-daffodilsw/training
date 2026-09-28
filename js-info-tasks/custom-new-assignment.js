function Person(name, age) {
  this.name = name;
  this.age = age;
}


Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};



function customNew(constructor,...args)
{

    const obj = Object.create(constructor.prototype);

    const res = constructor.apply(obj,args);

    const isObject = typeof res === 'object' && res !== null;
    const isFunction = typeof res === 'function';
    
    return (isObject || isFunction) ? res : obj;
}

const person1 = customNew(Person, 'Alice', 30);


person1.sayHello();
