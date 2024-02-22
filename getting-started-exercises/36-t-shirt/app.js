"use strict";
/* Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
function make_shirt(size, text) {
    console.log(`\n You Ordered the Shirt of ${size} Size and ${text} written on it. `);
}
make_shirt(`Small`, `"Master the Art of Marketing"`);
make_shirt(`Medium`, `"Be The King of Your Own World"`);
make_shirt(`Large`, `"Once a Soldier, Will Always be a Soldier"`);
