"use script"

var fah, cel, conversion;

fah = 82;

conversion = (fah - 32)*5 / 9;

conversion = conversion.toFixed(2)

cel = conversion;

console.log("82 degrees fahrenheit converted to celsius is " + cel);
