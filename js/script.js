/* eslint-disable no-console */

// initial values
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];


// concat()
var allNames = femaleNames.concat(maleNames);

console.log(allNames);


// add new name
var newName = prompt('Insert new name:');

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
} else {
    console.log('That name already exists.');
    alert('That name already exists.');
}

console.log(allNames);
