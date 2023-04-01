abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(value: boolean): void {
      this.rented = value;
    }
  
    abstract rentalRate(): number;
  
    rent(): string {
      if (this.rented) {
        return `${this.make} ${this.model} is already rented.`;
      } else {
        this.rented = true;
        return `${this.make} ${this.model} is now rented.`;
      }
    }
  
    return(): string {
      if (!this.rented) {
        return `${this.make} ${this.model} is already returned.`;
      } else {
        this.rented = false;
        return `${this.make} ${this.model} is now returned.`;
      }
    }
  }
  
  class Car extends Vehicle {
    private numSeats: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, numSeats: number) {
      super(make, model, year, rented);
      this.numSeats = numSeats;
    }
  
    rentalRate(): number {
      return 50;
    }
  
    getNumSeats(): number {
      return this.numSeats;
    }
  }
  
  class Truck extends Vehicle {
    private payloadCapacity: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, payloadCapacity: number) {
      super(make, model, year, rented);
      this.payloadCapacity = payloadCapacity;
    }
  
    rentalRate(): number {
      return 100;
    }
  
    getPayloadCapacity(): number {
      return this.payloadCapacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineSize: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
      super(make, model, year, rented);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 25;
    }
  
    getEngineSize(): number {
      return this.engineSize;
    }
  }
  
  // Sample usage
  const car = new Car("Toyota", "Corolla", 2022, false, 5);
  console.log(car.rent());
  console.log(car.rent());
  console.log(car.return());
  console.log(car.return());
  
  const truck = new Truck("Cultus", "Car", 2021, false, 1000);
  console.log(truck.rent());
  console.log(truck.return());
  
  const motorcycle = new Motorcycle("BMW", "Sportster", 2020, false, 883);
  console.log(motorcycle.rent());
  console.log(motorcycle.return());

  class RentalSystem {
    private vehicles: Vehicle[];
  
    constructor() {
      this.vehicles = [];
    }
  
    addVehicle(vehicle: Vehicle): void {
      this.vehicles.push(vehicle);
    }
  
    findAvailableVehicles(): Vehicle[] {
      return this.vehicles.filter((vehicle) => !vehicle.isRented());
    }
  
    rentVehicle(vehicle: Vehicle): string {
      if (!vehicle.isRented()) {
        vehicle.setRented(true);
        return `${vehicle.getMake()} ${vehicle.getModel()} is now rented.`;
      } else {
        return `${vehicle.getMake()} ${vehicle.getModel()} is already rented.`;
      }
    }
  
    returnVehicle(vehicle: Vehicle): string {
      if (vehicle.isRented()) {
        vehicle.setRented(false);
        return `${vehicle.getMake()} ${vehicle.getModel()} is now returned.`;
      } else {
        return `${vehicle.getMake()} ${vehicle.getModel()} is already returned.`;
      }
    }
  
    calculateRentalCost(vehicle: Vehicle, numDays: number): number {
      return vehicle.rentalRate() * numDays;
    }
  }
  
  const rentalSystem = new RentalSystem();
  
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
  
  const availableVehicles = rentalSystem.findAvailableVehicles();
  console.log("Available vehicles:", availableVehicles);
  
  const rentalCost = rentalSystem.calculateRentalCost(truck, 3);
  console.log(`Rental cost for ${truck.getMake()} ${truck.getModel()} for 3 days: $${rentalCost}`);
  