let userName = prompt("Lutfen Adinizi Giriniz: ")

let info = document.querySelector("#info")
let first = document.querySelector("#first")
let second = document.querySelector("#second")
let third = document.querySelector("#third")

info.innerHTML = `Merhaba, <strong>${userName}!</strong> Hoş geldin!`

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

first.innerHTML = `${today}`
second.innerHTML = `tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın Javascript`
third.innerHTML = `bölümü 1. Ödevindesiniz.`