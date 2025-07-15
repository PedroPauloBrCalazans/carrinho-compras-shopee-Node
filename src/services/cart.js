//quais ações meu carrinho pode fazer
//adicionar, deletar, remover um item, calcular total

async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {}

async function removeItem(userCart, index) {}

async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export { addItem, calculateTotal, deleteItem, removeItem };
