const greet = (firstName, lastName) => {
    return firstName + " " + lastName;
};
console.log(greet("Natasha", "Stenner"));
const calculateAgeDifference = (age1, age2) => {
    let ageDifference = age1 - age2;
    return ("The age difference is " + ageDifference + " years");
};
console.log(calculateAgeDifference(32, 23));
const fixColours = (colorArray, index) => {
    let checkedColor = colorArray[index];
    let newArray = [...colorArray];
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
const tasha = {
    name: "Tasha",
    age: 22,
    email: "tashas1997@gmail.com",
    phone: {
        model: "Samsung",
        telNumber: 123456,
        hasInsurance: true,
    }
};
const graham = {
    name: "Graham",
    age: 31,
    email: "graham@graham.com",
    phone: {
        model: "Iphone",
        telNumber: 1233456,
        hasInsurance: false,
    }
};
const katie = {
    name: "katie",
    age: 21,
    phone: {
        model: "Iphone",
        telNumber: 123345996,
        hasInsurance: true,
    }
};
const people = [tasha, graham, katie];
//# sourceMappingURL=index.js.map