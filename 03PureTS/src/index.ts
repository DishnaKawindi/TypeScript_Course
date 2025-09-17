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

    protected _courseCount = 1; // can be used in this class and any class extends this class

    readonly city: string = "colombo";    
    
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ){
        
    }

    // Not acessible outside the class
    private deleteToken(){
        console.log("token deleted");
    }

    // getters
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    // getter and setter function name of course count are the same 

    get courseCount(): number {
        return this._courseCount;
    }

    // setters - do not put return types for setters
    set courseCount(courseNum){
        if(courseNum <= 1) {
            throw new Error("Course count should be more than one")
        }
        this._courseCount = courseNum;
    }
    
}


// Inheritance

class SubUser extends User {
    isFamily: boolean = true;

    changeCourseCount(){
        this._courseCount = 4; // accessing protected property
    }
}


const dishna = new User("d.com", "dishna");

// console.log(dishna.name);