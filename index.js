

// creating the onclick function for our increment button

// let count = 0;

// function increment() {
//     count = count + 1;
//     document.getElementById("count-el").innerText = count;
// }


// OR- A BETTER WAY TO DO IT


let countEl = document.getElementById("count-el");


let count = 0;

function increment () {
    count += 1;
    countEl.textContent = count;
    
}

// Total Counter of Passengers

let saveEl = document.getElementById("save-el");

function save () {
    let totalCount = count + " - ";
    saveEl.textContent += totalCount;
    countEl.textContent = 0;
    count = 0;
}


// NB: line 13 in NOTE.md explains why "textContent" was a better function  to use above, compared to innerText

