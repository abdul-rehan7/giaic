let PersonName: string = "Abdul Rehan Mirza";

console.log("UpperCase:", PersonName.toUpperCase());
console.log("LowerCase:", PersonName.toLowerCase());

PersonName.toUpperCase() + PersonName.toLowerCase().slice(1);
console.log("TitleCase:", PersonName)