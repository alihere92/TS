var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (value) {
        this.rented = value;
    };
    Vehicle.prototype.rent = function () {
        if (this.rented) {
            return "".concat(this.make, " ").concat(this.model, " is already rented.");
        }
        else {
            this.rented = true;
            return "".concat(this.make, " ").concat(this.model, " is now rented.");
        }
    };
    Vehicle.prototype.return = function () {
        if (!this.rented) {
            return "".concat(this.make, " ").concat(this.model, " is already returned.");
        }
        else {
            this.rented = false;
            return "".concat(this.make, " ").concat(this.model, " is now returned.");
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, numSeats) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.numSeats = numSeats;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 50;
    };
    Car.prototype.getNumSeats = function () {
        return this.numSeats;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, payloadCapacity) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.payloadCapacity = payloadCapacity;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 100;
    };
    Truck.prototype.getPayloadCapacity = function () {
        return this.payloadCapacity;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, engineSize) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.engineSize = engineSize;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 25;
    };
    Motorcycle.prototype.getEngineSize = function () {
        return this.engineSize;
    };
    return Motorcycle;
}(Vehicle));
// Sample usage
var car = new Car("Honda", "Civic 2023", 2022, false, 5);
console.log(car.rent());
console.log(car.rent());
console.log(car.return());
console.log(car.return());
var truck = new Truck("Chevrolet Silverado", "Car4500", 2021, false, 1000);
console.log(truck.rent());
console.log(truck.return());
var motorcycle = new Motorcycle("Yamaha", "R15 V4", 2020, false, 883);
console.log(motorcycle.rent());
console.log(motorcycle.return());
var RentalSystem = /** @class */ (function () {
    function RentalSystem() {
        this.vehicles = [];
    }
    RentalSystem.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    RentalSystem.prototype.findAvailableVehicles = function () {
        return this.vehicles.filter(function (vehicle) { return !vehicle.isRented(); });
    };
    RentalSystem.prototype.rentVehicle = function (vehicle) {
        if (!vehicle.isRented()) {
            vehicle.setRented(true);
            return "".concat(vehicle.getMake(), " ").concat(vehicle.getModel(), " is now rented.");
        }
        else {
            return "".concat(vehicle.getMake(), " ").concat(vehicle.getModel(), " is already rented.");
        }
    };
    RentalSystem.prototype.returnVehicle = function (vehicle) {
        if (vehicle.isRented()) {
            vehicle.setRented(false);
            return "".concat(vehicle.getMake(), " ").concat(vehicle.getModel(), " is now returned.");
        }
        else {
            return "".concat(vehicle.getMake(), " ").concat(vehicle.getModel(), " is already returned.");
        }
    };
    RentalSystem.prototype.calculateRentalCost = function (vehicle, numDays) {
        return vehicle.rentalRate() * numDays;
    };
    return RentalSystem;
}());
var rentalSystem = new RentalSystem();
//const car = new Car("Toyota", "Corolla", 2022, false, 5);
//const truck = new Truck("Ford", "F-150", 2021, false, 1000);
//const motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2020, false, 883);
rentalSystem.addVehicle(car);
rentalSystem.addVehicle(truck);
rentalSystem.addVehicle(motorcycle);
console.log(rentalSystem.rentVehicle(car));
console.log(rentalSystem.rentVehicle(car));
console.log(rentalSystem.returnVehicle(car));
console.log(rentalSystem.returnVehicle(car));
var availableVehicles = rentalSystem.findAvailableVehicles();
console.log("Available vehicles:", availableVehicles);
var rentalCost = rentalSystem.calculateRentalCost(truck, 3);
console.log("Rental cost for ".concat(truck.getMake(), " ").concat(truck.getModel(), " for 3 days: $").concat(rentalCost));
