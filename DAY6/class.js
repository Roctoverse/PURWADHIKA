class User {
    name = " ";
    constructor(name) {
        this.name = name;
    }
    greeting () {
        console.log(this.name,"Hello World");
    }
}

let dimas = new User("dimas");
let rian = new User("rian")

console.log(dimas);
console.log(rian);

// const User = class {

// }
dimas.greeting();
rian.greeting();

const User2 = class {
    greeting() {
        console.log("hello expression");
    }
};

let rian2 = new User2()

console.log(rian2);

console.log(typeof 2);
console.log(typeof [1,2,3]);
console.log(typeof { foo: "bar"});
console.log(typeof function myname() {});
console.log(typeof User);

function User3(name, age) {
    this.name = name;
    this.age = age;
}

let rizky = new User2("rizky",30);

console.log(rizky)

rizky.greeting();