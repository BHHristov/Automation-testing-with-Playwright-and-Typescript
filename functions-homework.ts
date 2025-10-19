/*Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them.
Use if/else statement to find the largest number. Log the result. */
 function findLargest(numOne: number, numTwo: number, numThree: number): string{
    if(numOne >= numTwo && numOne >= numThree){
        return `${numOne} is the largest`
    }else if(numTwo >= numOne && numTwo >= numThree){
        return `${numTwo} is the largest`

    }else{
        return `${numThree} is the largest`
    }
 }
 console.log(findLargest(5,50,30));

 function findLargestSecond(numOne: number, numTwo: number, numThree: number): string{
    const max = Math.max(numOne,numTwo,numThree);
    return `${max} is the largest.`
 }
 console.log(findLargestSecond(20,9,4));

  /*Write a function “convertToCentimeters”  which receives parameter “inches” and add default value
  it and convert to centimeters. Log the result with default parameter and with passed parameter. */

  let convertToCentimeters = (inches: number, toCentimeters: number = 2.54) => inches * toCentimeters;
  console.log(convertToCentimeters(15));

  /*Write a function named “calculateArea” that takes a required width parameter and an optional height parameter.
  If height is not provided, assume the shape is a square.*/

  let calculateArea = (width: number, height?: number) =>{
    if(height){
        const area: number = width * height;
        return `Area is ${area}`;
    }else{
        const squareArea: number = width * width;
        return `Shape is square with ${squareArea} area.`
    }
  }
  console.log(calculateArea(10,20));
  console.log(calculateArea(5));
    
  
  
 