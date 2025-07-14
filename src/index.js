import createItem from "./services/item.js";

const cart = [];

console.log("Bem vindo ao carrinho da Shopee!");

const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

console.log(item2.subtotal());
