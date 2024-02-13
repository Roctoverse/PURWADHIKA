/*

ini adalah program pertama saya 
ini multipleline comment


*/
// single line comment


let name = "Michael Angelo"; // mendeklarasikan dan langsung meng-assign nilainya
let age; // mendeklarasikan variabel
age = 25; // mengassign nilai ke variablenya
age = 35;
let title = "IT Guy"

var hobby = " playing rocket league "
var hobby = " playing chess"

let dia;
let waktu = true;
let saya = null;


console.log(name, age);
console.log(hobby);
console.log(dia);


const PI = 3.14;

console.log(PI);
console.log(waktu);
console.log(saya);

let _name = "Pierre"
let $name = "Marco"

console.log(_name);
console.log($name);

let person = {
    name : "Joko",
    age : "55",
}


let arr = [1, 2, 3, 4]

console.log(person, typeof message);
console.log(arr, typeof arr);

let jiwa = "Joko 789"
console.log(typeof jiwa);

// console.log("Hello World");
// console.log("My Name is Roland");
// console.log("My age is 30") 


// INMUTABLE
/*
- primitive, hanya bisa menyimpan satu nilai

// MUTABLE
- tipe data structural, bisa menyimpan nilai lebih dari satu
*/

console.log(name[0])

name[0] = "B";
console.log("result=>", name);
console.log(person.name);

person.name = "Dimas"

console.log("result =>", person);

_name = $name;
console.log(_name);

console.log(name.toUpperCase());

console.log(name.split(" "));



console.log(name.slice(" "))

let introduce = "My name is "+ name +" , and Iam " + age + " years old. my title is " + title +" ";
console.log(introduce)

let introduce2 =   `my name is ${person.name} , iam ${person.age} years old. my title is ${person.title}`;
console.log(introduce2)

console.log(PI.toFixed());
console.log(Number("1234a"));

let res1 = "3" * "3"
console.log(res1)

let res2 = "test" + 1;
console.log(res2);

console.log(Boolean(" "));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(2));
console.log(Boolean(null));
console.log(Boolean());

let now = new Date();
console.log(now);
console.log(now, now.getFullYear(), now.getMonth(),now.getDate())


let yesterday = new Date("2024-01-28")
console.log(yesterday)

let saha = new Date(0);
console.log(saha);

console.log(5-6, 6 /4, 6 ** 3, 7 % 3);

res1 = -res1;
console.log(res1);


console.log(1 + 1 + "1")
console.log("1" + 1 + 1)


let myNumber = 5;
myNumber += 5;
myNumber += 5;

let myNumber2 = 7 
myNumber2 += 2;
myNumber2 += 2;
myNumber2 += 2;
myNumber2 += 2;
myNumber2 += 2;
myNumber2 += 2;


let counter = 4;
console.log(myNumber);
console.log(myNumber2);

console.log(--counter);
console.log(counter)


/*
Find out how to Count Rectangle

SET Long  Equals 10
SET Widht EQUALS 7

SET result Equals panjang Multiply lebar

Print result
Display Result

kalo lebar lebih panjang dari pada panjang ?

IF lebar MORE THAN panjang THEN
    DISPLAY "lebar tidak boleh lebih besar dari pada panjang"
    EXIT
===================

SET panjang EQUALS 10
SET lebar EQUALS 6
SET Tinggi EQUALS 8

SET area EQUALS panjang MULTIPLY lebar

SET volume EQUALS area MULTIPLY tinggi

PRINT volume








*/
