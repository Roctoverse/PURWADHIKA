let numKm = 1;
let numCm = 100000;
let number = 100000;
let satuan = "cm"

if(satuan == "cm") {
    number = number / numCm + " Km";
}

if(satuan == "km") {
    number = number /numKm + " Cm"
}

console.log(number);