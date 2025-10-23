//Interface declaration
interface Car{
    type: string;
    model: string;
    color: string;
    horsePower: number;
}


//Object declaration
const car: Car = {
    type: "Toyota",
    model: "Corolla",
    color: "blue",
    horsePower: 129,
};
console.log(car);


//Interface person object
interface Person {
    name: string;
    lastName: string;
    address: string;
    age: number;
    hobbies: string[];
    greeting: () => string;

}
const person: Person = {//Object with metid and array value
    name: "Ivan",
    lastName: "Ivanov",
    age: 30,
    address: "bul. Bulgaria 30A",
    hobbies: ["football", "ski", "hiking"],
    greeting: function (){
        return `Hello, my name is Ivan`  
    },

}
console.log(person);

//properties access
person.name;
person.age;
console.log(person.name);
//or
person["address"];
console.log(person["address"]);

//console.log(person.greeting());
//or
person["greeting"](); //Doesn't work -> to check later

//properties redeclaration

person.age = 35;
console.log(person);

//explicit object type
const mouse: {name: string, favFood: string, age: number} = {
    name: "Jerry",
    favFood: "cheese",
    age: 5,
};

//interfaces with optional parameters, read only and string literals

interface User {
    name: string;
    readonly email: string;
    role: "user" | "admin" | "superuser"; // predefined type
    job?: string; //optional parameter
    password?: string | number;
}

const user: User = {
    name: "Tom",
    email: "tom.@mail.com",
    role: "admin",
    job: "QA",
};
user.password = 12345; // optional paramater declared later
console.log(user);

interface Transmision {
    type: string;
}

interface Truck extends Transmision {
    horsepower: number;
}

const truck: Truck = {
    horsepower: 230,
    type: "TIR",
};
console.log(truck);




