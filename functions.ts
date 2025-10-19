function displayPersonalInfo(name: string, age: number): string{
    return `${name} is ${age} years old.`
}

console.log(displayPersonalInfo("Ivan", 34));

function devideNumbers(a: number, b: number): number{
    return a / b;
}
 
console.log(devideNumbers(10,2));

const sumNums = (a: number, b: number) => a + b;
console.log(sumNums(3,5));


function greeting(name: string, age?: number){
    if(age){
        console.log(`${name} is ${age} years old.`);
         
    }else{
        console.log(`Hello, ${name}!`);
       
    }

}

greeting("Ivan");
greeting("Pesho", 34);

function substractNums(a: number = 10, b:number = 5){
    console.log(a - b);
    
}
substractNums();
substractNums(25);
substractNums(35,9);

