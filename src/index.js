import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = []; //lista de desejo

console.log("Bem vindo ao carrinho da Shopee!");

const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhishList, item2);

console.log("Carrinho da Shopee: ");
await cartService.calculateTotal(myCart);
// console.log(item2.subtotal());
