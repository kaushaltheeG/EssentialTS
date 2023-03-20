var container = document.getElementById('container');

let s: number 
let y: string 

function countdown(initial, final, interval) {

    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }

}