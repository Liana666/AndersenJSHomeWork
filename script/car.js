class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    set brand(value) {
        if (value.length > 0 && value.length <= 50) {
            this.#brand = value;
        }
    }

    get brand() {
        return this.#brand;
    }

    set model(value) {
        if (value.length > 0 && value.length <= 50) {
            this.#model = value;
        }
    }

    get model() {
        return this.#model
    }

    set yearOfManufacturing(number) {
        const date = new Date();
        console.log(date.getFullYear())

        if (number >= 1900 && number <= date.getFullYear()) {
            this.#yearOfManufacturing = number;
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing
    }

    set maxSpeed(number) {
        if (number >= 100 && number <= 300) {
            this.#maxSpeed = number;
        }
    }

    get maxSpeed() {
        return this.#maxSpeed
    }

    set maxFuelVolume(number) {
        if (number >= 5 && number <= 20) {
            this.#maxFuelVolume = number;
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume
    }

    set fuelConsumption(number) {
        this.#fuelConsumption = number / 100;
    }

    get fuelConsumption() {
        return this.#fuelConsumption
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if (!isStarted) {
            this.#isStarted = true;

        }

        throw new Error('Машина уже заведена');
    }

    shutDownEngine() {
        if (isStarted) {
            this.#isStarted = false;
        }

        throw new Error('Машина ещё не заведена')
    }

    fillUpGasTank() {

    }

}


let car = new Car()
car.brand = 'www'
car.yearOfManufacturing = 2024
console.log(car.yearOfManufacturing)