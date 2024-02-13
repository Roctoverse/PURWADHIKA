class User {
    name = ''
    #secret = "1,2,3,4"
    
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log(`Hello ${this.name}`)
    }
}

let dimas = new User("dimas");

dimas.age = 30;

console.log(dimas);

console.log(dimas);

dimas.run = function () {
    console.log(this.name + " is running ...");
};