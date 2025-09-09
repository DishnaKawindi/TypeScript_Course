let greetings: string = "Hellow Dishna";

let myNum = 6;
// only allows number functions to myNum

// greetings = 6; --> error

console.log(greetings);

// number
let userID: number = 334455;

// boolean
let isLoggedIn: boolean = false;


let hero: string;

function getHero(){
    return "thor"
}

hero = getHero();

// if there was no explicit declaration :string on hero, TS takes the type as 'any'


// Just to remove the error on greetings
export {}