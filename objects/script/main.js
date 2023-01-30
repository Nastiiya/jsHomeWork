// // Example 1
const person = {
    firstName: "Stas",
    lastName: "Paf",

    print: function () {
        console.log(`I am ${this.firstName} ${this.lastName}`);
    }
}

const person2 = Object.create(person);
person2.print();

person2.firstName = "Nastia";
person2.lastName = "Vov";

person.print();
person2.print();

//Example 2

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.print = function () {
        console.log(`I am ${this.firstName} ${this.lastName}`);
    };
}

let stas = new Person("Stas", "Paf", 39);
let nastia = new Person("Nast", "Vov", 30);

stas.print();
nastia.print();


// Task 1
const car = {
    manufacturer: "VW",
    model: "scirocco",
    year: 2012,
    avgSpeed: 160,
    avgConsumption: 10,
    drivers: ["Stas"],

    printInformation: function () {
        console.log("manufacturer " + this.manufacturer);
        console.log("model " + this.model);
        console.log("year " + this.year);
        console.log("Average Speed " + this.avgSpeed);
        console.log("Average Consumption " + this.avgConsumption);
        console.log("List of drivers " + this.drivers);
    },

    addDriver: function (driverName) {
        let added = false;

        if (!this.isDriverInList(driverName)) {
            this.drivers.push(driverName);
            added = true;
        }
        return added;
    },

    isDriverInList: function (driverName) {
        return this.drivers.includes(driverName);
    },

    getTimeForDistance: function (distance) {
        return distance / this.avgSpeed;
    }
}

// Object.entries(car).forEach(([key, value]) => console.log(`${key}: ${value}`));
//
// console.log(Object.getOwnPropertyNames(car));
// console.log(Object.entries(car));

car.printInformation();

let result = car.addDriver("Nastya");
console.log(result);
console.log(car.addDriver("Nastya"));

car.printInformation();

console.log(car.getTimeForDistance(320));

// Task 2

const time = {
    SEC_IN_MIN: 60,
    MIN_IN_HOUR: 60,
    HOURS_IN_DAY: 24,

    hours: 0,
    min: 0,
    sec: 0,

    printTime: function () {
        let localSec = this.sec;
        let localMin = this.min;
        let localHours = this.hours;

        if (localSec < 10) {
            localSec = "0" + localSec;
        }

        if (localMin < 10) {
            localMin = "0" + localMin;
        }

        if (localHours < 10) {
            localHours = "0" + localHours;
        }

        console.log(`current time is ${localHours}:${localMin}:${localSec}`);
    },
    addSec: function (seconds) {
        this.sec = this.sec + seconds;
        if (this.sec >= this.SEC_IN_MIN) {
            this.addMin(Math.trunc(this.sec / this.SEC_IN_MIN));
            this.sec = this.sec % this.SEC_IN_MIN;
        }
    },

    addMin: function (minutes) {
        this.min = this.min + minutes;
        if (this.min >= this.MIN_IN_HOUR) {
            this.addHours(Math.trunc(this.min / this.MIN_IN_HOUR));
            this.min = this.min % this.MIN_IN_HOUR;
        }
    },

    addHours: function (hours) {
        this.hours += hours;
        if (this.hours >= this.HOURS_IN_DAY) {
            this.hours = this.hours % this.HOURS_IN_DAY;
        }
    }
}
time.printTime();
time.addSec(182);
time.addMin(58);
time.addHours(23);
time.printTime();


//Task 2

let menu = {
    _items: [],

    addItem(meailName, price) {
        let isFound = false;
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].meailName === meailName) {
                this._items[i].price = price;
                isFound = true;
                break;
            }
        }

        if (!isFound) {
            this._items.push({meailName, price})
        }
    },

    set todaysSpecial(mealName) {
        let isFound = false;

        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].meailName === mealName) {
                this._todaysSpecial = this._items[i];
                isFound = true;
                break;
            }
        }

        if (!isFound) {
            console.log(`Menu item ${mealName} not found`);
        }
    },

    get todaysSpecial() {
        return this._todaysSpecial;
    }
}

menu.addItem("Pasta", 10);
menu.addItem("Eggs", 5);
menu.addItem("Wuffles", 4);
menu.todaysSpecial = "Eggs"
console.log(menu.todaysSpecial);

//Task 3

const team = {
    _players: [],
    _games: [],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayter(firstName, lastName, age) {
        this.players.push({firstName, lastName, age});
    },

    addGame(opponent, teamPoints, opponentPoints) {
        this.games.push({opponent, teamPoints, opponentPoints});
    },

    printPlayers() {
        for (let i = 0; i < this.players.length; i++) {
            console.log(`Player #${i + 1} - ${this.players[i].lastName} ${this.players[i].firstName}. He/she is year old ${this.players[i].age}`);
        }
    },

    printGames() {
        for (let i = 0; i < this.games.length; i++) {
            if (this.games[i].teamPoints > this.games[i].opponentPoints) {
                console.log(`${this.games[i].opponent} is sucks`)
            } else {
                console.log(`The judge sucks`)
            }
        }
    }
}

team.addPlayter("Stas", "Paf", 39);
team.addPlayter("Yura", "Kov", 36);
team.addPlayter("Nastia", "Vov", 30);


team.addGame("Zhilyanska", 12, 0);
team.addGame("LT", 100, 1);

team.printPlayers();
team.printGames();