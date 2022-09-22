// Task 1

function Product(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.isBought = false;
    this.sum = function () {
        return this.price * this.qty;
    }

    this.print = function () {
        console.log(this.name);
        console.log(this.price);
        console.log(this.qty);
        console.log(this.isBought);
    }
}

let egg = new Product("egg", 2, 10);
let lemon = new Product("lemon", 3, 3);
let apple = new Product("apple", 5, 5);


let purcheseList = [egg, lemon, apple];
let firstElement = purcheseList[0];

function boughtByName(name) {
    for (let i = 0; i < purcheseList.length; i++) {
        let currentElement = purcheseList[i];
        if (currentElement.name === name) {
            currentElement.isBought = true;
        }
    }
}

function boughtByName2(name) {
    for (let currentElement of purcheseList) {
        if (currentElement.name === name) {
            currentElement.isBought = true;
        }
    }
}

let searchableName = "egg";
function boughtByName3(value, index, array) {
        console.log(value);
        console.log(index);
        console.log(array);
}

// purcheseList[0].print();
purcheseList.forEach(boughtByName3);
boughtByName2("egg");
purcheseList[0].print();