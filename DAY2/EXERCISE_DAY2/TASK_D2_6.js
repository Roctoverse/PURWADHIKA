let fibbonaci = 0
let previous = 0
let next = 1
let finish = 15

for (let i = 2; i <= finish; i++ ) {
    fibbonaci = previous + next
    console.log( " fibbonaci =>", fibbonaci)
    previous = next
    console.log("prev", previous);
    next = fibbonaci
    console.log("next",next);
    console.log(i,"=============",i);
}

