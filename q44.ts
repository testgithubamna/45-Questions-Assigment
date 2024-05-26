// Define a function with a rest parameter that accept items arguments representing  our sandwich
function makeSandwich(...items: string[]){
   console.log("\nMaking a sandwich with the following items:");

   items.forEach(singleItem => console.log("-" + singleItem));

   console.log("Now Enjoy Sandwich");
}

// call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Chicken", "Cheese", "Mayo",  "Egg", "Lettuce", "Tomato");