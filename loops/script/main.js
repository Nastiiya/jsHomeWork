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


