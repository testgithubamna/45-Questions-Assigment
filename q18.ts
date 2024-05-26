// making a array of countries and print its original order
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);

// print the Array in Aplhabetical order without modifyging the Actual Array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// show that the array in still in its original order
console.log("Still in Original Order:", countriesToVisit);

// print the Array in Reversed order without modifyging the Actual Array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// show that the array in still in its original order
console.log("Still in Original Order:", countriesToVisit);

// We have changed the original Array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// print the array to show that its back to its original order
console.log("Back to Originall Order:", countriesToVisit.reverse());

// print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed the original array order now in reverse order again
console.log("Original Array Reversed:", countriesToVisit.reverse());