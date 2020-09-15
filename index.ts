const greet = (firstName: string, lastName: string): string => {
    return firstName + " " + lastName
}

console.log(greet("natasha", "stenner"))

const calculateAgeDifference = (age1: number, age2: number):string => {
    let ageDifference = age1 - age2;
    return ("The age difference is " + ageDifference + " years")
}

console.log(calculateAgeDifference(32, 23))  

