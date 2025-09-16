interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // Can define methods. Return type is string. Both ways are correct
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

// to add more properties to the User Interface, open it anywhere in the project
interface User {
    githubToken: string
}

// interface can be extended to another interface
interface Admin extends User {
    role: "admin" | "learner"
}

const dishna: Admin = {
    dbId: 32,
    email: "dishna.com",
    role: "admin",
    userId: 2132,
    githubToken: "git",
    startTrial: () => {
        return "start trial"
    },
    getCoupon: (name: "dishna", value: 10) => {
        return 10
    }
}