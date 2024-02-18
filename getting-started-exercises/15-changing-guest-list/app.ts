// List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guests: string[] = ["Bill Gates", "Stephen Hawkings", "Steve Jobs", "Barack Obama"]
let cannotattend: string = "Stephen Hawkings";
let newguest: string = "Tim Cook";
let message: string = "";

guests.map((items) => console.log(` \n ${items}, You are invited to my Birthday Party Today at 9 o'clock. \n`));

// New Invitations

console.log(`\t - - ${cannotattend} can't attend the party! - - \t`)

guests[guests.indexOf(cannotattend)] = newguest;
guests.map((items) => console.log(` \n ${items}, You are invited to my Birthday Party which is rescheduled at 10 o'clock`));
