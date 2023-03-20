var container = document.getElementById('container');

interface Contact extends Address{
    id: number; 
    name: String; 
    birthDate?: Date; 
}

interface Address {
    line1: string; 
}

let primaryContact: Contact; 

primaryContact = {
    id: 2,
    name: 'kzk', 
    birthDate: new Date(),
    line1: 'doqeij'
}

let secondaryContact: Contact = {
    id: 2,
    name: 'hehe', 
    line1: 'wdqp'
}

function countdown(initial, final = 0, interval = 1) {

    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }

}

countdown(10, 4, 2)
