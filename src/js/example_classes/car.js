/**
 * Vehicle Class
 * Uses a getter and setter for the make property as an example
 * Uses the short form of getter and setter for type property
 */
class Vehicle {




    /**
     * @param {string} make    - vehicle manufacturer
     * @param {string} model   - vehicle model
     * @param {string} type    - type of vehicle  i.e. car,truck,motorcycle
     */
    constructor (make = 'Honda', model = 'Civic', type = 'car') {
        this._make = make;
        /**
         * The Vehicle Model
         * @type {string}
         */
        this.model = model;
        this._type = type;
    }

    /**
     * Get the Make of the Vehicle
     * @type {string}
     */
    get make() {
        return this._make;
    }

    /**
     * Set the Make of the Vehicle
     * @type {string}
     */
    set make(value) {
        this._make = value;
    }




    /** @type {string} */
    get type() { return this._type; }

    /** @type {string} */
    set type(value) { this._type = value; }




    /**
     * Returns a String of the Vehicle Make and Model
     * @returns {string}
     */
    getInfo () {
        return `This is a ${this._make} ${this.model}.`;
    }


    /**
     * Create a new Vehicle Instance
     * @param {string} make    - vehicle manufacturer
     * @param {string} model   - vehicle model
     * @param {string} type    - type of vehicle  : car,truck,motorcycle
     * @returns {Vehicle}
     */
    static create (make, model, type) {
        return new Vehicle(make, model, type);
    }

}

/**
 * A Car Class
 */
class Car extends Vehicle {

    /**
     * Create a new Car Instance
     * @param {string} make    - vehicle manufacturer
     * @param {string} model   - vehicle model
     */
    constructor (make, model) {
        super(make, model, 'car');
    }

    /**
     * Returns a String of the Vehicle Make and Model
     * @override
     * @returns {string}
     */
    getInfo () {
        return 'It is a car. ' + super.getInfo();
    }

    /**
     * Create a new Car Instance
     * @override
     * @param {string} make    - vehicle manufacturer
     * @param {string} model   - vehicle model
     * @returns {Car}
     */
    static create (make, model) {
        return new Car(make, model);
    }

}




/*
let car2 = Vehicle.create('Tesla', 'x3', 'car');
console.log(car2.make); // Tesla
console.log(car2.model); // car
console.log(car2.getInfo()); // car
car2.name = 'BMWxxx';
console.log(car2.name); // BMW

let car = new Car('Isuzu','Trooper');
console.log(car.make); // It is a car: Tesla
 console.log(car.model); // car
 console.log(car.getInfo()); // car
    */


export { Vehicle, Car };