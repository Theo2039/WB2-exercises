"use script"

var fah, cel, conversion;

cel = 28;

conversion = (cel * 9 / 5 + 32);

conversion = conversion.toFixed(1)

fah = conversion;

console.log("28 degrees celsius converted to fahrenheit is " + fah);