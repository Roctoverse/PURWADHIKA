
let num = 7
let isPrime = true;
for (let i = 2; i < num; i++ ) {
    if ( num % i == 0) {
        isPrime = false;
        break;
    }
}
console.log(num, "is a prime number")
console.log(num, isPrime)