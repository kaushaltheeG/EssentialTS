var array = [
    "Pick up drycleaning", 
    "Clean Batcave", 
    "Save Gotham"
];

for (var index in array) {
    var value = array[index];
    console.log(`${index}: ${value}`);
}

interface Contact {
    id: number;
    name: string; 

}

const clone =  <T>(source: T): T => {
    return Object.apply({}, source)
}

const a: Contact = {id: 123, name: 'kzkz',}; 
const b = clone(a)

const dateRange = {startDate: Date.now() };
const dateRangeCopy = clone(dateRange);