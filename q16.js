// Creating a Guest list Array
let guestlist2 = ["Ali", "Amna", "Iqra", "Ibrahim"];
// making variable for those guest who cant come
let dontcome = guestlist2[0];
// print the name of guest who cant come
console.log(dontcome, "Never come");
// Add or Remove Values from Guest list Array
guestlist2.splice(0, 1, "Hamzah");
// Message print for Bigger Table
console.log("Good News !  We have Found a Bigger Table for Dinner.");
// Adding a new value at starting index of array
guestlist2.unshift("Sana");
// Adding a new value at ending index of array
guestlist2.push("Zain");
// Get a middle index of our guest list array
let middleIndex = Math.floor(guestlist2.length / 2);
// Adding a new guest to middle index of array
guestlist2.splice(middleIndex, 0, "Farhan");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with thier names
guestlist2.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
export {};
