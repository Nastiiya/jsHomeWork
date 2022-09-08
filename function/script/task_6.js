function aria (a, b){
    let result;
    if (b === undefined){
        result = a * a;
    } else {
        result = a * b;
    }
    return result;
}

console.log(aria(2,3));
console.log(aria(2));

