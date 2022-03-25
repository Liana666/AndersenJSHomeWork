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
        const minValue = value.length > 0;
        const maxValue = value.length <= 50;
        const isValidValue = minValue && maxValue;

        if (isValidValue) {
            this.#brand = value;
        }
    }

    get brand() {
        return this.#brand;
    }

    set model(value) {
        const minValue = value.length > 0;
        const maxValue = value.length <= 50;
        const isValidValue = minValue && maxValue;

        if (isValidValue) {
            this.#model = value;
        }
    }

    get model() {
        return this.#model;
    }

    set yearOfManufacturing(number) {
        const date = new Date();
        const isValidNumber = number >= 1900 && number <= date.getFullYear();

        if (isValidNumber) {
            this.#yearOfManufacturing = number;
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set maxSpeed(number) {
        const minNumber = number >= 100;
        const maxNumber = number <= 300;
        const isValidNumber = minNumber && maxNumber;

        if (isValidNumber) {
            this.#maxSpeed = number;
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxFuelVolume(number) {
        const minNumber = number >= 5;
        const maxNumber = number <= 20;
        const isValidNumber = minNumber && maxNumber;

        if (isValidNumber) {
            this.#maxFuelVolume = number;
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set fuelConsumption(number) {
        this.#fuelConsumption = number;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
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
        if (this.#isStarted) {
            throw new Error('Машина уже заведена');
        }

        this.#isStarted = true;
    }

    shutDownEngine() {
        const notStarted = !this.#isStarted;

        if (notStarted) {
            throw new Error('Машина ещё не заведена')
        }

        this.#isStarted = false;
    }

    fillUpGasTank(volume) {
        const sumFuelVolumes = this.#currentFuelVolume + volume;
        const isValidVolume = typeof volume !== 'number' || volume <= 0;

        if (isValidVolume) {
            throw new Error('Неверное количество топлива для заправки');
        }

        if (sumFuelVolumes > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        }

        this.#currentFuelVolume += volume;
    }

    drive(speed, hoursNumber) {
        const distance = speed * hoursNumber;
        const fuelVolumeForDistance = distance * this.#fuelConsumption / 100;
        const isValidSpeed = typeof speed !== 'number' || speed <= 0;
        const isValidHours = typeof hoursNumber !== 'number' || hoursNumber <= 0;
        const notStarted = !this.#isStarted;

        if (isValidSpeed) {
            throw new Error('Неверная скорость');
        }

        if (isValidHours) {
            throw new Error('Неверная количество часов');
        }

        if (speed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро');
        }

        if (notStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }

        if (fuelVolumeForDistance > this.#currentFuelVolume) {
            throw new Error('Недостаточно топлива');
        }

        this.#currentFuelVolume -= fuelVolumeForDistance;
        this.#mileage += distance;
    }
}

module.exports = { Car };