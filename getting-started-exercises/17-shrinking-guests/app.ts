/*You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

let guests: string[] = ["Bill Gates", "Stephen Hawkings", "Steve Jobs", "Barack Obama"]
let cannotattend: string = "Stephen Hawkings";
let newguest: string = "Tim Cook";
let message: string = "";

console.log(" \n\t More Space is available so I'm Inviting More Guests \t ");

// Guest in start 
console.log("Guest Added in Start")
let guestbigg: string = "Elon Musk";
guests.unshift(guestbigg);
console.log(guests);

// Guest in middle

console.log("Guest Added in Middle")
let guestmid: string = "Warren Buffet";
let middleindex = guests.length / 2
guests.splice(middleindex, 0, guestmid);
console.log(guests);



// Guest in End 
console.log("Guest Added in the End")
guests.push("Robert Kiyosaki")
console.log(guests);


// new invitation
guests.map((items) => console.log(` \n ${items}, You are invited to my Birthday Party Tomorrow!`));


// - - - - - SHRINKING GUESTS - - - - - 

console.log("I can Invite only two people for dinner");

while (guests.length > 2) {
    let removeguest = guests.pop();
    console.log(` \n Sorry ${removeguest}, I can't Invite you to the Dinner`);
}

console.log(`\n\t ${guests[0]}, You are still invited`)
console.log(`\n\t ${guests[1]}, You are still invited`)

// Shrinking the Last two Guests Also 
guests.pop()
guests.pop()

console.log(`\n  The List of Guests at the End of Program: ${guests} `);