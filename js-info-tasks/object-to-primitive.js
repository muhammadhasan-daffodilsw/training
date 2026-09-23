class User
{
    constructor(name,salary)
    {
        this.name = name;
        this.salary=salary;
    }
    
    [Symbol.toPrimitive](hint)
    {
        return hint == 'string' ? `Name : ${this.name}` : this.salary
    }

    valueOf()
    {
        return this.salary;
    }

    toString()
    {
        return this.name;
    }

    
}

let user = new User('John',10000);

console.log(String(user));
console.log(+user);
