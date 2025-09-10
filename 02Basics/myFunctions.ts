function addTwo(num: number): number{
    return num + 2;
    // :number next to input parameter is the return type. there are ways that can return more than 1 type
}

function getUpper(val: string): string{
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    // isPaid is given a default value
}

addTwo(5);
getUpper("Dishna");

signUpUser("Dishna", "dk.com", true);
loginUser("Dishna", "dk.com");

// return type declaration in arrow functions
const getHello = (s: string):string => {
    return "Hello";
}

const heros = ["thor", "spider man", "iron man"];
// const heros = [1,2,3];

heros.map((hero): string => {
    return `hero is ${hero}`
})

// no return
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// some functions never return a value
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {}