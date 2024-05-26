// Creating a Guest list Array
let Guestlist = ["Ali", "Amna", "Iqra", "Ibrahim"];
// making variable for those guest who cant come
let Dontcome = Guestlist[0];
// print the name of guest who cant come
console.log(Dontcome, "Never come");
// Add or Remove Values from Guest list Array
Guestlist.splice(0, 1, "Hamzah");
// Message print for Bigger Table
console.log("Good News !  We have Found a Bigger Table for Dinner.");
// Adding a new value at starting index of array
Guestlist.unshift("Sana");
// Adding a new value at ending index of array
Guestlist.push("Zain");
// Get a middle index of our guest list array
let middleIndex1 = Math.floor(Guestlist.length / 2);
// Adding a new guest to middle index of array
Guestlist.splice(middleIndex1, 0, "Farhan");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with thier names
Guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only  invite two Guests to dinner with me");
// Using while-loop to remove guests from the array untill only two names remain
while (Guestlist.length > 2) {
    let removeGuest = Guestlist.pop();
    console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);
}
// printing a invitations to the last two guest on the list
console.log("Invitations to the last 2Guests:");
Guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));
// Removing last two Guest from the list
Guestlist.pop();
Guestlist.pop();
console.log("Empty List:", Guestlist);
export {};
