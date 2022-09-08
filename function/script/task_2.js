function printArguments(argOne, argTwo, argThree) {
    console.log("number of arguments is " + arguments.length);
}

printArguments(1, 2, 3);
printArguments(1); //bad
printArguments(1, 2); //bad
printArguments(1, 2, 3, 4); //bad

function printArgumentsNewWay(...args) {
    console.log("number of arguments in new way function is " + args.length);
}

printArgumentsNewWay(1, 2, 3, 4);

