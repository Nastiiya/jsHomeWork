//Option 1 (function declaration)
function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

var sumOne = sum(1,2);
console.log(sumOne);
console.log(sum(5,3));
console.log(sum(sum(5,3),5));

//Option 2 (function expression)
let stringConcatFunk = function (stringOne, stringTwo){
    return stringOne + stringTwo;
}



var concatedString = stringConcatFunk ("Nastia", "Stas");
console.log(concatedString);

//Option 3 (arrow function)
let isBiggerThanZero = (number) => {return number>0;}
let isBiggerThanZero1 = function (number) {return number>0;}

let sumNumber = (number1, number2) => {return number1 + number2;}

console.log(isBiggerThanZero(2));
console.log(isBiggerThanZero(-2));
console.log(sum(-2, 2));



