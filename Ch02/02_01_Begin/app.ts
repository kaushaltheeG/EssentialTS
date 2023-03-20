var container = document.getElementById('container');

let s: number 
let y: string 
let a: any[];

function countdown(initial, final, interval) {

    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }

}