// const user: (string|number)[] = [1, "dk"] - can be in any order

// in tuple, the order matters
// to define the order
let user: [string, number, boolean]

user = ["dishna", 123, true]

// to restricr only 3 numbers
let rgb: [number, number, number] = [255, 123, 432]



type User = [number, string]

const newUser: User = [123, "dishna"]

// but can change the values
newUser[1] = "kawindi"

// it allows array methods - not good
newUser.push(123);