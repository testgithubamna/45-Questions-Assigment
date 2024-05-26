// Making a Function
function make_shirt (size: string = "Large" , printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// calling a function with by-default values
make_shirt();

// calling a function now with Medium size and default message
make_shirt("Medium")

// calling a function now with Small size and different print message
make_shirt("Small", "I Love JavaScript")