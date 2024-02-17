let priceRp = "1.00"
let PriceCurrency = 1000;
let currency = "Rp"


if(currency == "Rp") {
    PriceCurrency = "Rp " + PriceCurrency * priceRp
}


console.log(PriceCurrency + ",00");

// const rupiah = (number)=>{
//     return new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR"
//     }).format(number);
//   }

// console.log(rupiah(20000)) // "Rp 20.000,00"