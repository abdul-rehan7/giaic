// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests: string[] = ["Bill Gates", "Stephen Hawkings", "Steve Jobs", "Barack Obama"]
let cannotattend: string = "Stephen Hawkings";
let newguest: string = "Tim Cook";
let message: string = "";
console.log(guests);
console.log(`\t - - ${cannotattend} can't attend the party! - - \t`)

guests[guests.indexOf(cannotattend)] = newguest;
console.log( "\n", guests);
guests.map((items) => console.log(` \n ${items}, You are invited to my Birthday Party which is rescheduled at 10 o'clock`));

//  -- More Space Available --

console.log(" \n\t More Space is available so I'm Inviting More Guests \t "); 

// Guest in start 
console.log("Guest added in start")
let guestbigg:string = "Elon Musk";
guests.unshift(guestbigg);
console.log(guests);

// Guest in middle
console.log("Guest added in Middle")
let guestmid:string = "Warren Buffet";
let middleindex = guests.length/2
guests.splice(middleindex,0,guestmid);
console.log(guests);


// Guest in End 
console.log("Guest added in the End")
guests.push("Robert Kiyosaki")
console.log(guests);


// new invitation
guests.map((items) => console.log(` \n ${items}, You are invited to my Birthday Party Tomorrow!`));