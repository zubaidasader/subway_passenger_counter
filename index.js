
let count = 0
var saved = document.getElementById("saved_data")

function increment(){
    count += 1
    document.getElementById("counts").textContent = count
}

function save(){
    saved.textContent += count + " "
    count = 0 
}
