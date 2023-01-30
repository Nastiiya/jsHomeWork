function isPerfection(num) {
    let arr = [1];
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }

    let sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i]
    }
    return sumArr === num;
}

function getAllPerfNums(min, max) {
    let perfArr = [];

    for (let i = min; i <= max; i++) {
        if (isPerfection(i)) {
            perfArr.push(i)
        }
    }
    return perfArr
}

console.log(getAllPerfNums(1, 28));

