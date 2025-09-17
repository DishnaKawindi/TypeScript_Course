"use strict";
// console.log("typescript project");
// Classes
// class User {
//     // Properties - default public
//     email: string;
//     name: string;
//     readonly city: string = "N/A";
//     private city1: string = "colombo"; // only accessible within the class
//     // constrictor
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// Most common way
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; // can be used in this class and any class extends this class
        this.city = "colombo";
    }
    // Not acessible outside the class
    deleteToken() {
        console.log("token deleted");
    }
    // getters
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    // getter and setter function name of course count are the same 
    get courseCount() {
        return this._courseCount;
    }
    // setters - do not put return types for setters
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one");
        }
        this._courseCount = courseNum;
    }
}
// Inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // accessing protected property
    }
}
const dishna = new User("d.com", "dishna");
// console.log(dishna.name);
