// Chiedere i kilometri del viaggio
const Kmnumber = Number(prompt("Inserire numero di chilometri desiderato"));
console.log(Kmnumber);
// Chiedere l'età del passeggero
const passengerAge = Number(prompt("Inserire eta del passeggero"));
console.log(passengerAge);
// 1. il prezzo del biglietto base è definito in base ai km (0.21 € al km)
let price = Number(Kmnumber * 0.21)
console.log(price);
document.getElementById("ticketprice").innerHTML = `Prezzo biglietto: ${price}€`
// 2. va applicato uno sconto del 20% per i minorenni
if (passengerAge <= 18) {
    let discountYoung = Number((Kmnumber * 0.21) * (4 / 5))
    console.log(discountYoung);
    document.getElementById("ticketprice").innerHTML = `Prezzo biglietto: ${discountYoung}€`
}
// 3. va applicato uno sconto del 40% per gli over 65.
if (passengerAge >= 65) {
    let discountOld = Number((Kmnumber * 0.21) * (3 / 5))
    console.log(discountOld);
    document.getElementById("ticketprice").innerHTML = `Prezzo biglietto: ${discountOld}€`
}
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.