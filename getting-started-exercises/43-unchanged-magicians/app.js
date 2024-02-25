"use strict";
/* Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
// SHOW MAGICIANS
function show_magicians(magicians) {
    const names = magicians.map(magician => {
        console.log(magician);
        return magician;
    });
}
const Name = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
function make_great(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push('The Great ' + magicians[i]);
    }
    return greatMagicians;
}
const magicians2 = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
const greatMagicians2 = make_great(magicians2);
show_magicians(magicians2);
show_magicians(greatMagicians2);
