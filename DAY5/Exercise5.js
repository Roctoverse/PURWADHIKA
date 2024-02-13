// Array and Function


//====// Task 2
/*

looping by input
    jika angka kelipatan 3 , ganjti jadi fizz
    jika angka kelipatan 5, ganti jadi buzz
    jika angka kelipatan 3 dan 5 , ganti jadi fizz buzz
    jika bukan keduanya , maka tampilkan angka biasa

*/


// function fizzBuzz(input){
//     for (let i = 1; i <= input; i++) {
//         // console.log(i);
//     if ( i % 3 === 0 && i % 5 === 0 ){ 
//         console.log("FizzBuzz");
//      } else if (i % 5 === 0) {
//         console.log("Fizz")
//         } else if ( i % 3 === 0 ) {
//         console.log("buzz");
//      } else {
//         console.log(i)
//         }

//     }
// }

// fizzBuzz(5);
// console.log("=======");

// fizzBuzz(20);



//============= Task 4
// remove odd number // baca satu - satu item array menggunakan : 

// function removeOddNumber(arr) { 
//     let result = [];
//     // console.log(arr[0] % 2 == 1);
//     //console.log(arr[1] % 2 == 1);
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0 ) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(removeOddNumber([1,2,3,4,5,6,7,8,9,10]))


//======== Task 5

// let myString = " Hello World "
// let myWords = myString.split(" ");
//     console.log(myWords);


// Big Task
// == Task 1

// function maxMinMean(arr) {
//     let highest = arr[0];
//     let lowest = arr[0];
//     let average = arr[0]; //changed from original post
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < highest) {
//             highest = arr[i];
//         }
//         if (arr[i] > lowest) {
//             lowest = arr[i];
//         }
//         average = average + arr[i];
//     }
//     return {highest: highest, lowest: lowest, average: average/arr.length}; //changed from original post
// }
// console.log(maxMinMean([12, 5, 23, 18, 4, 45, 32]))


// == Task 2

// function list (a){   
//     let myList = a.join(' and ' )
//     return myList
//   }
// console.log(list(["apple", "banana", "cherry", "date"]))

// function arrayToString(arr) {
//     let result = " ";

//     for (let i = 0; i < arr.length; i++) {
//         if(i=== arr.length - 1) {
//             result = result + "and " + arr[i];
//         } else {
//             result = result + arr[i];
//         }
//         console.log(result)
//     }
//     return result;
// }


// console.log(arrayToString(["apple", "banana", "cherry", "date"]));





/////////



// function mergeword(str) {
//     let temp = " ";
//     for (let i = 0; i < str.length; i++) {
//         temp = temp + str[i] !== " " ? str[i] : "" ;
//         if(str[i] == " " || i === str.length - 1) {
//             result.push(temp);
//             temp = "";
//         }
        
//     }
//     return result;
// }

// mergeword(mergeword("Hello World!"))




// Task 4

// function summAarray(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return " invalid array"
//     }

//     let result = []

//     for(let i =0; i < arr1.length; i++) {
//         let temp = arr1[i] + arr2[i];
//         result.push(temp)

//     }
//     return result
// }

// console.log(summAarray([2,3,4],[0,9,8]))


// //////

// const list1 = ['Huey', 'Dewey', 'Louie']

// const output = list.reduce(function(acc, cur, i) {
//   let str = acc;
//   str += cur;
  
//   if (i < list.length - 2) {
//     str += ', ';
//   } else if (i < list.length - 1) {
//     str += ', and ';
//   }
  
//   return str;
// }, '');

// console.log(output);

// ////


function checkArrayexist(arr, newElement) {
    let flag = false
    for( let i =0; i < arr.length; i++) {
        if(newElement == arr[i]) {
            flag = true;
            break
        }
    }
    if(flag = false) {
        arr.push(newElement)
    }
    return arr;
}

console.log(checkArrayexist([1,2,3,4],8))
console.log(checkArrayexist([1,2,3,4],4))


function maximumCapacity(maxSize, ...arr) {
    
    let result = []
    for(let i = 1;i <= maxSize; i++) {
        result.push(arr[i-1]);
    }
    return result;

}

console.log(maximumCapacity(5,5,10,24,3,6,7,8))
