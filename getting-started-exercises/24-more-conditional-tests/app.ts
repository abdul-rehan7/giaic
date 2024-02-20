/* You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

let age1:number = 20;
let age2:number = 25;
let age3:number = 16;

console.log("is age1 >= '18'?")
console.log(age1 >= 18);

console.log("is age1 = '18'?")
console.log(age1 == 18);

// Tests using "and" and "or" operators

console.log("is age1 > '18' and  age2 > 18?")
console.log(age1 > 18 && age2 > 18);

console.log("is age1 > '18' and  age3 > 18?")
console.log(age1 > 18 || age3 > 18);


// Test whether an item is in a array 

let forces:string [] = [ "Army", "Navy", "AirForce"]
if(forces.includes("Navy")){
    console.log(" \n Navy is included");
}
else{
    console.log(" \n Navy is not included")
}

// Test whether an item is not in a array 

if(forces.includes("Rangers")){
    console.log(" \n Rangers is included");
}
else{
    console.log(" \n Rangers is not included")
}

