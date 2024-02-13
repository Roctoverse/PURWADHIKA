// const one = {
//     a: 'value a',
//     b: {
//       innerB1: 'value innerB1',
//       innerB2: {
//         innerB21: 'value innerB21',
//         },
//       },
//     c: [1,2,3]
//   };
  
//   const two = {
//     a: 'value a',
//     b: {
//       innerB1: 'value innerB1',
//       innerB2: {
//         innerB21: 'value innerB21',
//         },
//       },
//     c: [1,2,3]
//   };
  
//   // Using JavaScript
//   JSON.stringify(one) === JSON.stringify(two);  //true
  
//   // Using Lodash
//   _.isEqual(one, two);  // true

// Exercise 1

// const input1 = { a: 1, b :2 }
// const input2 = { a:1, c : 3 }

// const checkObjects = (obj1,obj2) => {
//     return obj1.a === obj2.a
// }

// console.log(checkObjects({a:2},{a:1}))
// console.log(checkObjects({a:"Hello"},{a:1}))
// console.log(checkObjects({a:1},{a:1}))



function checkObjects(obj1,obj2) {
    return obj1.a === obj2.a
}

console.log(checkObjects({a:2},{a:1}))
console.log(checkObjects({a:"Hello"},{a:1}))
console.log(checkObjects({a  :1  },{a   :      1}))


function mergeObject(obj1,obj2) {
    let result = {}
    let objLength1 = Object.entries(obj1)
    let objlength2 = object.entries(obj2)
    
    for (let i = 0; i < objLengtj1.length; i++) {
        for(let j = 0; j < objlength2.length1; j++) {
            
        }
    }
}

console.log(mergeObject({a:1, b:2},{a:1, c:3}));

