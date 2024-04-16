const calculateTotalCost = (cart) =>{
    // check that chart is not empty
    if(cart.length == 0){
        return 0;
    }

// calculate Total cost
const  TotalCost = cart.reduce((acc, item) =>{
 const itemCost  = item.unitPrice *item.quantity;
 return acc + itemCost;
},0);
return TotalCost;
}

const customerCart = [
{unitPrice:10, quantity:2},{unitPrice: 5, quantity: 3},{unitPrice: 8, quantity:1}
];

const finalOrderPrice = calculateTotalCost(customerCart);
console.log(`final Order price : ${finalOrderPrice}K`);