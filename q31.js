// creating a Array with 5 Values
let userNames = ["Amna", "Ayan", "Farhan", "Admin", "Iqra"];
//  Remove all values from our Array Now our Array is empty
userNames = [];
if (userNames.length === 0) {
    console.log("your Array in Empty We need to find some users!");
}
else {
    // using forEach loop on array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
export {};
