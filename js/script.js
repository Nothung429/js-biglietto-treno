// Chiedere i kilometri del viaggio
const kmNumber = Number(prompt("Inserire numero di chilometri desiderato"));
console.log(kmNumber);
// Chiedere l'età del passeggero
const passengerAge = Number(prompt("Inserire eta del passeggero"));
console.log(passengerAge);
// 1. il prezzo del biglietto base è definito in base ai km (0.21 € al km)
let price = Number(kmNumber * 0.21)
price = price.toFixed(2);
console.log(price);
// 2. va applicato uno sconto del 20% per i minorenni
// 3. va applicato uno sconto del 40% per gli over 65.
if (passengerAge <= 18) {
    discountYoung = Number((kmNumber * 0.21) * (4 / 5))
    discountYoung = discountYoung.toFixed(2);
    console.log(discountYoung);
    document.getElementById("ticketprice").innerHTML = `Prezzo biglietto (young18): ${discountYoung}€`
} else if (passengerAge >= 65) {
    discountOld = Number((kmNumber * 0.21) * (3 / 5))
    discountOld = discountOld.toFixed(2);
    console.log(discountOld);
    document.getElementById("ticketprice").innerHTML = `Prezzo biglietto (old65): ${discountOld}€`
} else {
    price = Number(kmNumber * 0.21)
    price = price.toFixed(2);
    console.log(price);
    document.getElementById("ticketprice").innerHTML = `Prezzo biglietto: ${price}€`;
}
// Prezzo finale con massimo due cifre decimali