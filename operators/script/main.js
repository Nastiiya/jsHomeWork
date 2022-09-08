//Task 1
let num = 0.1 + 0.2;
console.log(num);

num = num.toFixed(1);
console.log(num);

/* Task 2 */
let a = "1";
let b = 2;

let sum = a + b;
console.log(sum);

sum = Number(a) + b;
console.log(sum);

// Task 3
let sizeInGb = 4;
const MB_IN_GB = 1024;
let sizeInMb = sizeInGb * MB_IN_GB;
let fileSize = 820;
console.log(Math.trunc(sizeInMb / fileSize));


// Task 4
let userMoney = 100;
let priceOfChocolate = 17;
let numberOfChocolates = Math.trunc(userMoney / priceOfChocolate);
console.log(numberOfChocolates);

let rest = userMoney - numberOfChocolates * priceOfChocolate;
console.log(rest);
console.log(userMoney % priceOfChocolate);

// Task 5
let number = 32101;
let initialNumberLength = String(number).length;
let reverseNumber = "";

for (let i = 0; i < initialNumberLength; i++) {
    reverseNumber += number % 10;
    number = Math.trunc(number / 10);
}
console.log(reverseNumber);

// Task 6
let bankAccount = 500;
let period = 2;
let percentPerYear = 5;
const MONTH_IN_YEAR = 12;

let profitPerYear = bankAccount * percentPerYear / 100;
console.log((profitPerYear / MONTH_IN_YEAR * period).toFixed(2));
