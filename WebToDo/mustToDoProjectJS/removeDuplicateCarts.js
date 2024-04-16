function removeDuplicates(cart) {
    let uniqueItems = new Set();
    let nonDuplicateCart = [];

    for (let item of cart) {
        if (!uniqueItems.has(item)) {
            uniqueItems.add(item);
            nonDuplicateCart.push(item);
        }
    }

    return nonDuplicateCart;
}

// Example of usage:
let customerCart = ["item1", "item2", "item1", "item3", "item2", "item4"];
let cleanedCart = removeDuplicates(customerCart);

console.log("Original Cart:", customerCart);
console.log("Cart without Duplicates:", cleanedCart);
