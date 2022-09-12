// Task 1


function whoAmI(age) {
    const child = 11;
    const teen = 17;
    const adult = 59;

    let whoAmI;

    if (age < 0) {
        whoAmI = "wrong value";
    } else if (age <= child) {
        whoAmI = "child";
    } else if (age <= teen) {
        whoAmI = "teen";
    } else if (age <= adult) {
        whoAmI = "adult";
    } else if (age > adult) {
        whoAmI = "pensioner";
    }
    return whoAmI;
}

console.log(whoAmI(39));
console.log(whoAmI(-39));

// Task 2

function symbolOfNumber(number) {
    let symbolOne = "!";
    let symbolTwo = "@";
    let symbolThree = "#";

    let result;

    if (number === 1) {
        result = symbolOne;
    } else if (number === 2) {
        result = symbolTwo;
    } else if (number === 3) {
        result = symbolThree;
    }

    return result;
}

let symbol = symbolOfNumber(2);
console.log(symbol);

// Task 3

function sumOfNumbers(fromNumber, toNumber) {
    let result = 0;

    for (let i = fromNumber; i <= toNumber; i++) {
        result = result + i;
    }
    return result;
}

console.log(sumOfNumbers(2, 6));

// Task 3

function commandDivider(numberOne, numberTwo) {
    let result = 1;
    if (numberOne !== numberTwo) {

        let minNumber = numberOne < numberTwo ? numberOne : numberTwo;


        // if (numberOne < numberTwo){
        //     minNumber = numberOne;
        // } else {
        //     minNumber = numberTwo;
        // }

        for (let i = minNumber; i > 1; i--) {
            if (numberOne % i === 0 && numberTwo % i === 0) {
                result = i;
                break;
            }

        }
    } else {
        result = numberOne;
    }
    return result;
}

console.log(commandDivider(4, 8));
console.log(commandDivider(6, 8));
console.log(commandDivider(8, 8));

// Task 5

function allDividers(number) {
    let result = [1];

    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }

    return result;
}

let array = allDividers(10);
console.log(array);

// Task 6

function reverseNumber(number) {
    let reverseNumber = "";
    let initialNumberLength = String(number).length;

    for (let i = 0; i < initialNumberLength; i++) {
        reverseNumber += number % 10;
        number = Math.trunc(number / 10);
    }
    return Number(reverseNumber);
}

function palindrome (number) {
    let result = false;

    if (String(number).length === 5 && number === reverseNumber(number)) {
        result = true;
    }

    return result;
}
let numberPali1 = 54372;
console.log("Number " + numberPali1 + " is palindrome - " + palindrome(numberPali1));
let numberPali2 = 54345;
console.log(palindrome(numberPali2));

