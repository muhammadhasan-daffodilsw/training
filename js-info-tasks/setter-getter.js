

class User
{
    constructor(){
        this.name = '';
        this.surname = '';
    }

    get fullName()
    {
        return `${this.name} ${this.surname}`;
    }

    set fullName(str)
    {
        let [name,surname] = str.split(' ');
        this.name=name;
        this.surname=surname;
    }
}


let user = Object.create(User);
user.fullName = 'John Doe';
console.log(user.fullName);

