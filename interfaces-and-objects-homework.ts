/*1. Create a TypeScript interface named Person that represents a person with
 the following properties:
• name (string) • lastName (string) • age (number) • email (string) • phoneNumber (number)*/

interface Person{
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
};

/*2.  Create a TypeScript interface named PersonInfo that Extends  Person type from the 
previous exercise and add the following properties: • country (optional string property) 
• greeting  (optional method that return welcome message) */

interface PersonInfo extends Person{
    name: string;
    country?: string;
    greeting?(): string;
};

//3. Create an object with properties of type Person using the interface from exercise one 

const person: Person = {
    name: "John",
    lastName: "Smith",
    age: 35,
    email: "john@mail.com",
    phoneNumber: 359234,
};
/*4.  Create an object of type PersonInfo using the interface from Exercise two 
and declare an object person2 with properties of type PersonInfo. */

const personInfo: PersonInfo = {
    name: "Peter",
    lastName: "Jackson",
    age: 50,
    email: "peter@mail.com",
    phoneNumber: 8973644,
    country: "USA",
    greeting: function (): string{
        return `Welcome!`
    },
};

console.log(personInfo.greeting?.());
