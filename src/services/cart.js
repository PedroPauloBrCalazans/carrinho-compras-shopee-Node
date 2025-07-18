//quais ações meu carrinho pode fazer
//adicionar, deletar, remover um item, calcular total

async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  //1. Encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encotre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. Item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. Caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

async function displayCart(userCart) {
  console.log("\nShopee Carrinho Lista: ");

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | SubTotal = ${item.subtotal()}`
    );
  });
}

async function calculateTotal(userCart) {
  console.log("\nCarrinho da Shopee: ");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

  console.log(`🎁 Total: ${result}`);
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
