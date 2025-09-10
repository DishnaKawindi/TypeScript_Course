const user = {
    name: "Dishna",
    email: "dk.com",
    isActive: true
}

function createUser({name: String, isPaid: boolean}){}

let newUser = {name: "Dishna", isPaid: false, email: "dk.com"};

createUser(newUser)

// if you pass the variables to the function like this it will give an error
// createUser({name: "Dishna", isPaid: false, email: "dk.com"})
// That is why it is assigned to another variable and then passed on

// :{} is the return type
function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 789}
}



// type alias - Creating data types
type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser1(user: User):User{
    return {name: "", email: "", isActive: true}
}

createUser1({name: "", email: "", isActive: true})




// readonly - Other people won;t be able to change this. Only in TS. JS allows it
// creditCardDetails?: number - ? means not mandatory
type User1 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

let myUser: User1 = {
    _id: "123456",
    name: "Dishna",
    email: "dk.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

// Combining types
type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

myUser.email = "dishna.com";
// Below gives an error
// myUser._id = "76543";


export {}