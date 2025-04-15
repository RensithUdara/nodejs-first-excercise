function printName(name) {
    console.log(name);
}

// Uncomment the line below to use the printName function
// printName("Rensith Udara");

console.log("My name is " + process.argv[2] + ".");
console.log("I am from " + parseInt(process.argv[3]) + ".");
console.log("I am " + process.argv[4] + " years old.");
