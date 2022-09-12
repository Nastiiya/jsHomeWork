// Task 1
let car = {
    manufacturer: "VW",
    model: "scirocco",
    year: 2012,
    avgSpeed: 160,
    avgConsumption: 10,
    drivers: ["Stas"],

    printInformation: function (){
        console.log("manufacturer " + this.manufacturer);
        console.log("model " + this.model);
        console.log("year " + this.year);
        console.log("avgSpeed " + this.avgSpeed);
        console.log("avgConsumption " + this.avgConsumption);
        console.log("drivers " + this.drivers);
    },

    addDriver: function (driverName) {
        this.drivers.push(driverName);
    },

    isDriverInList: function (driverName){
        return this.drivers.includes(driverName);
    }
}

car.printInformation();

if (!car.isDriverInList("Nastya")){
    car.addDriver("Nastya");
}

car.printInformation();