/**
 * Created by Christopher on 12/2/2015.
 */


// Define as constant
const privateData = new WeakMap();

class MyClass {
    constructor(name, age) {
        privateData(this, { name: name, age: age });
    }

    getName() {
        return privateData.get(this).name;
    }

    getAge() {
        return privateData.get(this).age;
    }
}

export default MyClass;