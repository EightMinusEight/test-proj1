/**
 *
 */
class Person {

    /**
     *
     * @param {string}  firstName
     * @param {string}  lastName
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export {Person}