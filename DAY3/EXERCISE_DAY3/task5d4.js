// const fullWord = "hello world"

// var splitWord = fullWord.split(" ")

// var result = [];

// for (let i = 0; i < splitWord.length; i++  ) {
//     var word = splitWord[i]
//     var resWord = '';

//     for (let j = 0; j < word.length; j++) {
//         if(j === 0) resWord += word[j].toUpperCase()
//         else resWord += word[j]
//     }
//     result.push(resWord)
// }


// console.log(result.join(" "));



let word = "Hello World";
var wordChange = word.slice(3);
console.log(wordChange);

// let strin = "How To Remove A String";
// console.log(strin);
// strin = strin.slice(3, 99999999999);
// console.log(strin);

let school = "University of New Hampshire";
let arr = school.split(' ');//split into array
arr.shift();//remove first character
school = arr.join(' ');//convert into string
console.log(school);