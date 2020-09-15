const greet = (firstName: string, lastName: string): string => {
    return firstName + " " + lastName
}

console.log(greet("Natasha", "Stenner"))

const calculateAgeDifference = (age1: number, age2: number): string => {
    let ageDifference = age1 - age2;
    return ("The age difference is " + ageDifference + " years")
}

console.log(calculateAgeDifference(32, 23))

const fixColours = (colorArray: string[], index: number): string[] => {
    let checkedColor: string = colorArray[index];
    let newArray: string[] = [...colorArray];
    if (checkedColor != "red" && checkedColor != "blue" && checkedColor != "yellow") {
        newArray.splice(index, 1, "red");
        return newArray;
    }
    return colorArray;
};
console.log(fixColours(["yellow", "blue", "red", "red"], 1));
console.log(fixColours(["yellow", "purple", "red", "red"], 2));
console.log(fixColours(["yellow", "purple", "green", "red"], 1));
console.log(fixColours(["yellow", "blue", "red", "red"], 0));


interface IPerson {
    name: string;
    age: number;
    email?: string;
    phone?: IPhone;
}

interface IPhone {
    model: string;
    telNumber: number;
    hasInsurance: boolean;
}

const tasha: IPerson = {
    name: "Tasha",
    age: 22,
    email: "tashas1997@gmail.com",
    phone: {
        model: "Samsung",
        telNumber: 123456,
        hasInsurance: true,
    }
}

const graham: IPerson = {
    name: "Graham",
    age: 31,
    email: "graham@graham.com",
    phone: {
        model: "Iphone",
        telNumber: 1233456,
        hasInsurance: false,
    }
}

const katie: IPerson = {
    name: "katie",
    age: 21,
    phone: {
        model: "Iphone",
        telNumber: 123345996,
        hasInsurance: true,
    }
}

const people: IPerson[] = [tasha, graham, katie]; 
