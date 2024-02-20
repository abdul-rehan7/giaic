/* Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

var usernames: string[] = ["admin", "Ahmed", "Kamal", "Shahid", "James"];


for (var i in usernames) {
    if (usernames[i] == 'admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}

// for the list is empty

 usernames = [];

console.log("\n \t Now The usernames are Empty")

    if (usernames.length === 0) {
        console.log("\n \t We need to find some users!");
    }
    else {
        console.log(`No need to find new users`);
    }

