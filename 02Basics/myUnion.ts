// can be one of many types

let score: number | string = 33;

score = 55;

score = "forty";



type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let user: User | Admin = {name: "Dishna", id: 321};

user = {username: "Dishna", id: 321};



function getDBId(id: number | string){
    console.log(`DB Id is: ${id}`)
    // id.toLowerCase() - this gives an error because it is not for numbers

    if(typeof id === "string") {
        id.toLowerCase()
    }
}

getDBId(3);
getDBId("321qwe");


// arrays

// all numbers or all strings, no mixing
const data: number[] | string[] = [1, 2, 3]

// to have both types
const data3: (string|number)[] = [1, 2, "dishna", "k"]


// Can only have given values

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

// seatAllotment = "none" - this gives an error