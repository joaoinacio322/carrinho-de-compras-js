let valorTotal = 0;
limpar ();

function adicionar() {
    // recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

   if (!produto || produto.trim() === "" ){
    alert('Preencha o campo produto');
      return;
   }

   if (isNaN(quantidade) || quantidade <= 0) {
    alert('Preencha o campo quantidade');
    return;
   }
    // Calcular o preço, subtotal
    let preco = valorUnitario * quantidade;
    // Adicionar o produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
     <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
 </section>`
    // Calcular o valor total do carrinho
    valorTotal = valorTotal + preco;
    campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;
  
}


function limpar() {
    let valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0.00';

}
