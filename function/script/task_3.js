function compare(numberOne, numberTwo){
    var result;
    if (numberOne < numberTwo){
        result = -1;
    } else if (numberOne > numberTwo){
        result = 1;
    } else if (numberOne == numberTwo){
        result = 0;
    }
    console.log(result);
    return result;
}

var var1 = compare(2,5);
var var2 = compare(6,5);
var var3 = compare(5,5);

