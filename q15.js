let guestlist = ["Ali", "Amna", "Iqra", "Ibrahim"];
let dontCome = guestlist[0];
console.log(dontCome, "Never come");
guestlist.splice(0, 1, "Hamzah");
guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
export {};
