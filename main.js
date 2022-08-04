console.log('JavaScript funguje');

let formular = document.querySelector("#formular")
formular.addEventListener("submit", zpracujFormular)

let jmeno = document.querySelector("#jmeno")
let mesto = document.querySelector("#mesto")
let spam = document.querySelector("#spam")

function zpracujFormular(){
    event.preventDefault()

    console.log("zpracovavam")

    console.log("Jmeno: "+ jmeno.value)
    console.log("Město: " + mesto.value)
    console.log("Checked: "+ spam.checked)

}    

let barvicka = document.querySelector("#barva");
barvicka.addEventListener("change", zmenBarvu)

function zmenBarvu(){
    let barva = document.querySelector("#barva").value
    document.querySelector("body").style.backgroundColor = barva;
}