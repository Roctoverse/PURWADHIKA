
let start = 0
let step = 1
let finish = 30

for (let i = start; i <= finish; i = i + step){
    if (i === 0) {
        console.log(i + " -> Even Number") 
    }
    else if ( i % 2 === 0) {
        console.log(i + " -> Even Number");
    }
    else {
        console.log(i + " -> Odd Number")
    }
    
}
