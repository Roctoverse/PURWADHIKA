let str = "hello"
let resName = ""; 

for (let i = str.length - 1 ; i >= 0; i--  ) {
    resName = resName + str[i]
}

console.log(str.split("").reverse().join(""));