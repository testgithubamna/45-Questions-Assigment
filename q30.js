// creating a array
let userNames = ["Amna", "Ayan", "Farhan", "Admin", "Iqra"];
// using forEach loop on array
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
});
export {};
