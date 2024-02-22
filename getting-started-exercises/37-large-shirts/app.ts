/* Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

function make_shirt( size:string = 'Large', text:string = "I Love TypeScript"  ){
  console.log(`"You have ordered a ${size} size shirt with ${text} written on it!"`);
}

make_shirt();
make_shirt('medium');


// a shirt of any size with a different message

make_shirt('"small', 'I want a Small Size Shirt to wear..."')