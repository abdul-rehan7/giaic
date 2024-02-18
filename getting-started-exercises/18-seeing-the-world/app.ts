/* Think of at least five places in the world you’d like to visit.
0 Store the locations in a array. Make sure the array is not in alphabetical order.
1 Print your array in its original order.
2 Print your array in alphabetical order without modifying the actual list.
3 Show that your array is still in its original order by printing it.
4 Print your array in reverse alphabetical order without changing the order of the original list.
5 Show that your array is still in its original order by printing it again.
6 Reverse the order of your list. Print the array to show that its order has changed.
7 Reverse the order of your list again. Print the list to show it’s back to its original order.
8 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
9 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */


let locations: string[] = ["UAE", "Dubai", "Italy", "Romania", "Istanbul"];

// ---1
console.log("Locations in Original Order");
console.log(locations);

// ---2
console.log("Locations in Alphabetical Order");
console.log([...locations].sort());

// ---3
console.log("Locations in Original Order");
console.log(locations);

// ---4
console.log("Locations in Reverse Order");
console.log([...locations].sort().reverse());

// ---5
console.log("Locations in Original Order");
console.log(locations);

// ---6
console.log("Order Changed of the list (Reversed)");
let reverse = locations.sort().reverse();
console.log(locations)

// ---7
console.log("Locations in reverse Reverse(Aplhabetical) Order");
let againreverse = reverse.reverse();
console.log(locations);

// ---8
console.log("Locations in Aplhabetical Order");
let sorted = locations.sort();
console.log(locations);

// ---9
console.log("Locations in reverse Aplhabetical Order");
let sortedreverse = sorted.reverse();
console.log(locations);


