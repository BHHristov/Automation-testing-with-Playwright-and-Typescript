/*1.  Declare a variable `name` and assigns it a string value. 
Also declare a variable `age` and assign it a number value. 
Finally print the values of name and age.  
Example: “Hello! I am Petar Petrov, 20 years old” **Hint: Use string interpolation*/


let name: string = "John Atanasov";
let age: number = 29;

console.log("Exercise 1 output:")
console.log(`Hello! I am ${name}, ${age} years old`)

/*2.  Declare two variables of type number and assign them number values. 
 After that calculate their addition and substraction in different variables and print them.
 Example : const addition =  num1 + num2;  */

 let num1:number = 15;
 let num2:number= 35;

 let addition:number= num1 + num2;
 let substraction:number = num1 - num2;

 console.log("Exercise 2 output:")
 console.log(addition);
 console.log(substraction);

 /*3. Declare numeric variable and assign a num. 
 Declare also a variable “isWithinRange” to compare if the number is withing the range.
  Example:  num >= 10 || num <= 50 */

  let num:number=25;
  let isWithinRange:boolean = num >= 10 && num <= 50;

  console.log("Exercise 3 output:")
  console.log(`Number ${num} is in range between 10 and 50: ${isWithinRange}`);



