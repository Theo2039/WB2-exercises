"Use Script"

let payRate, hoursWorked, regularHours, overtime, regularPay, grossPay;

payRate = 17.30;
hoursWorked = 45;
regularHours = 40;
overtime = (hoursWorked - 40);
regularPay = (payRate * regularHours);


if (hoursWorked > regularHours) {
    grossPay = regularPay + (1.5 * payRate * overtime)
}

else (hoursWorked <= regularHours) { 
    grossPay = hoursWorked * payRate
}
    


console.log (grossPay);




