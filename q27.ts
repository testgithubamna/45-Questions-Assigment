// define variable
let alienColor = "green";

// using if and else-if statements
if(alienColor === "green") {
    console.log("(Version 1) you shot down green alien you have earned 5 points");
}
else if(alienColor === "yellow") {
    console.log("you shot down yellow  alien you have earned 10 points");
}
else if(alienColor === "red") {
    console.log("you shot down red alien you have earned 15 points");
}

// version 2

let alienColor2 = "yellow";

if(alienColor2 === "green"){
    console.log("you shot down green alien you have earned 5 points");
}
else if(alienColor2 === "yellow"){
    console.log("(Version 2) you shot down yellow alien you have earned 10 points");
}
else if(alienColor2 === "red"){
    console.log("you shot down red alien you have earned 15 points");
}

// version 3

let alienColor3 = "red";

if(alienColor3 === "green"){
    console.log("you shot down green alien you have earned 5 points");
}
else if(alienColor3 === "yellow"){
    console.log("you shot down yellow alien you have earned 10 points");
}
else if(alienColor3 === "red"){
    console.log("(Version 3) you shot down red alien you have earned 15 points");
}