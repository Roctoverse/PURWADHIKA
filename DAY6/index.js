let obj = {
    name: "Dimas",
    title: "lecturer",
    teach() {
        console.log("lecturing...");
    },
    hobbies: [],
    key: "Another key"

} 

let key = "animes"


console.log(obj);

console.log(obj.name);
console.log(obj["title"]);

obj.teach();

obj.hobbies.push("rocket league")

console.log(obj);

delete obj.hobbies;

console.log(obj);

obj,animes = ["jiba","sua","doreaemon"]

console.log(obj);

console.log(obj[key]);

console.log(obj.anotherkey)

//let obj2 = new Object({}) 

for (let key in obj) {
    console.log(key, ":", obj[key]);
}


// built in method
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray("Dimas"));

// let [a,b] = [10,20];

// console.log(a,b)

// [a, b] = [b, a];

// console.log(a,b);

const person = { name: " budi", age : 20};


const { name , age} = person;

console.log(name);
console.log(age);

const dataOne = [1,2,3];
const dataTwo = [4,5,6];

const finalData = [...dataOne, ...dataTwo  ];
console.log(finalData);

obj.teach()

let name1 = "rian"
let name2 = name1;

console.log(name2)

name1 = "rizky";
console.log(name2);

let obj2 = { foo: "bar"}
let obj3 = obj2;
console.log(obj3);
obj2 = {foo: "key"}
console.log(obj3);