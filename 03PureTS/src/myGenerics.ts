// Valid but not recommended for generics
function identityOne(val: boolean | number): boolean | number{
    return val;
}

// valid but prob: can be accepting string and returning number
function identityTwo(val: any): any {
    return val;
}

// Correct one - Automatically takes return type is same as input type
function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree("Dishna")

// same as above. valid
function identityFour<T>(val: T): T {
    return val;
}

// If we are passing our own type
interface Bottle {
    brand: string,
    bottletype: number
}

// then call the function
identityFour<Bottle>({brand: "water", bottletype: 3});




// taking arrays as input
// T[] = Array<T>

// Here the function takes an array as input but returns only one value from that array. It is valid
function getSearchProducts<T>(products: T[]): T {
    // do osme db operations
    const myIndex = 3
    return products[myIndex]
}

// Arrow functions (same example as above but arrow function)
// <T,> - comma is used to indicate that this is not a JSX syntax but a generics type
const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}





// Adding restrictions to generics

interface Database {
    connection: string,
    username: string,
    password: string
}

// A restriction is added to the second parameter

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object{
    return{
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection: "asasdasdasd", username: "dishna", password: "123456"});






// Generic classes

interface Quiz {
    name: string,
    quiztype: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}


class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}