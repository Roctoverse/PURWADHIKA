let name = "madam";
let resName = ""; 

for (let i = name.length - 1 ; i >= 0; i--  ) {
    resName = resName + name[i]
}

console.log(resName == name);