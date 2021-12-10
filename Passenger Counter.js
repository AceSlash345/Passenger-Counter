let counter = document.getElementById("counter")
let number = 0
let archive = document.getElementById("archive")
function addUp(){
    number = number + 1
    counter.textContent = number
}
function saveUp(){
    let list = number + " - "
    archive.textContent += list
    number = 0
    counter.textContent = number
}
