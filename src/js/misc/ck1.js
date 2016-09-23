/**
 * Created by Christopher on 3/27/2016.
 */


"use strict";

let bob = 5;
const ted = 5;




// var person = {fname:"John", lname:"Doe", age:25};

/*for (x in person) {
    text += person[x];
}*/

for (var obj in ted) {

}

const arr = ['a', 'b', 'c'];
for (const elem of arr) {
    console.log(elem);
}



function truncate(str, len = 30) {
    if (typeof str !== 'string') {
        throw new TypeError('String Required');
    }
    return str.substring(0, len) + '…';
}













