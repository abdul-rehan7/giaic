/* Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

const names:string [] = ["Harry Houdini","David Copperfield","Penn Jillette"]

function show_magicians( magicians: string[]): void{
 const  names = magicians.map( magician => {
    console.log(magician)
    return magician;
 })
}

show_magicians(names)