const form = document.querySelector('#form-compras')
const listaPedido = document.querySelector('#lista-pedidos')

const quantHandler = document.querySelector('#qtd');
const nameHandler = document.querySelector('#produto');

const msgListaPedidos = document.querySelector('.lista-pedidos p');

const submitBtn = document.querySelector("button");

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    if (quantHandler.value ==='' || nameHandler.value.trim() === ''){
        alert('inválido')
    }
    else{
        const newItem = document.createElement('li');
        newItem.innerText = `${quantHandler.value}: ${nameHandler.value}`
        const newBtn = document.createElement('button');
        newBtn.addEventListener('click', removeItem);
        newBtn.innerText = 'X';
        newItem.insertAdjacentElement('beforeend', newBtn);
        listaPedido.append(newItem);
        msgListaPedidos.innerText = '';
    }
})

    const removeItem = (e) => {
        e.target.parentNode.remove();
        const carrinho = document.querySelectorAll('ul li');
        if (carrinho.length == 0){
            msgListaPedidos.innerText = 'Seu pedido está vazio. Adicione produtos no carrinho!';
    }
}