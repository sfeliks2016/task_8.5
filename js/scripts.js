// scripts.js

var a = 1;
var b = 3;
var value = ((a * a) + (2 * a * b) - (b * b));

(value > 0) ? console.log('wynik dodatni') : console.log('wynik ujemny');
    
console.log(value);

switch (value) {
case 0:
    console.log('wynik jest równy zero');
    break;

default:
    console.log('wynik inny niz zero');
}
        
    