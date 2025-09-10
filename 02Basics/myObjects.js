"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Dishna",
    email: "dk.com",
    isActive: true
};
function createUser(_a) {
    var String = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Dishna", isPaid: false, email: "dk.com" };
createUser(newUser);
// if you pass the variables to the function like this it will give an error
// createUser({name: "Dishna", isPaid: false, email: "dk.com"})
// That is why it is assigned to another variable and then passed on
// :{} is the return type
function createCourse() {
    return { name: "reactjs", price: 789 };
}
function createUser1(user) {
    return { name: "", email: "", isActive: true };
}
createUser1({ name: "", email: "", isActive: true });
var myUser = {
    _id: "123456",
    name: "Dishna",
    email: "dk.com",
    isActive: false
};
myUser.email = "dishna.com";
