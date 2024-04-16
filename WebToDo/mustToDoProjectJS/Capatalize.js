function capitalizeFirstName(name) {
    // Using ternary operator to check and capitalize the first letter
    let modifiedName = name && name[0].toLowerCase() === name[0]
        ? name.charAt(0).toUpperCase() + name.slice(1)
        : name;

    return modifiedName;
}

// Example usage:
let userInput = "Rahul";
let modifiedUserInput = capitalizeFirstName(userInput);

console.log(`Original Name: ${userInput}`);
console.log(`Modified Name: ${modifiedUserInput}`);
     