"use strict";
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
let guests = ["Bill Gates", "Stephen Hawking", "Steve Jobs", "Barack Obama"];
exports.guests = guests;
let message = "";
guests.map((items) => console.log(`${items}, You are invited to my Birthday Party Today at 9 o'clock.`));
