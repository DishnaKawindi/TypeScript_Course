// Documentation - Narrowing
// problem - typeof [1,2,3] and null are detected as "object"

// simple example
function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase();
}



// below function is Ok but it does not check for empty string

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
    if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}





// in Operator narrowing

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

// narrowing down only to Admin interface

function isAdminAccount(account: User | Admin){
    // in operator
    if("isAdmin" in account){
        return account.isAdmin
    }
}




// instanceof narrowing

// when an object is created using "new" keyword, instanceof can be used
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}





// Type predicates

type Fish = {swim: () => void};
type Bird = {fly: () => void};

// confirming if it is actually a fish and returning pet is fish, rather than boolean
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}



// Descriminated unions

interface Circle {
    kind: "circle",
    raduis: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

// "kind" id to identify which interface

type Shape = Circle | Square | Rectangle


// this functions does not give an error is another shape is added in future
function gettrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.raduis ** 2
    }
    // return shape.side ** 2
}

function getArea(shape: Shape) {
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.raduis ** 2

        case "square":
            return shape.side ** 2

        case "rectangle":
            return shape.length * shape.width

        // by adding this default, if another shape is added in future, this gives an error
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}