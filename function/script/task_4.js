//TODO написати через цикл for
//TODO написати через рекурсію
function factorial (number){
    var result = number;
    while (number > 1){
        number --;
        result = result * number;
    }
    return result;
}

var fac = factorial(5);
console.log (fac);

