//Metodo del Cuadrado Medio
let seed = 794;
let count = 0;
let alreadySeenNumbers = [];
let calc = 0;

let currentNumber = 0;

while (count < 10) {

    currentNumber = Math.pow(seed, 2);
    calc = parseInt(currentNumber.toString().substring(1, 5));
    alreadySeenNumbers.push(calc);
    seed = parseInt(calc);
    count += 1;

}

console.log(alreadySeenNumbers);
console.log("Nuestro numero aleatorio es : ", seed);

//Metodo Congruencial Lineal
let seed2 = 9994;
let count2 = 0;
let alreadySeenNumbers2 = [];

let currentNumber2 = 0;

let mult = 6;
let aditive = 8;
let mod = 10;

while (count2 < 10) {

    currentNumber2 = (((seed2 * mult) + aditive) % mod);
    alreadySeenNumbers2.push(currentNumber2)
    seed2 = currentNumber2;
    count2 += 1;

}

console.log(alreadySeenNumbers2);
console.log("Nuestro numero aleatorio es : ", seed2);