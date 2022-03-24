const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shell', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shell', price: 50}
];

let x = products.map((product) => {
    if(product.price > 30){
        return {name: product.name, price: product.price / 2}
    } else {
        return product
    }
});

console.log(x);