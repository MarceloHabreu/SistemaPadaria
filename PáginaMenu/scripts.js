// Obtém os elementos
const modalLogin = document.getElementById('loginForm');
const modalCadastro = document.getElementById('cadastroForm')

// Abre o formulário login ao clicar no botão
document.getElementById('loginBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Impede que o link navegue para "#" ou qualquer href que possa ter(tira o comportamento padrão dele).
    document.getElementById('loginForm').style.display = 'block'; // Mostra o modal
});
// Seguir com o login
let entrar = document.getElementById('loginForm').onsubmit = function (event) {
    // Previne o comportamento padrão do formulário (envio e recarregamento da página)
    event.preventDefault();
    // Fecha o formulário(simulando que a pessoa entrou na conta)
    modalLogin.style.display = "none";
}


// Abre o formulário cadastro ao clicar no botão
document.getElementById('cadastroBtn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('cadastroForm').style.display = 'block'; // Mostra o modal
});
// Seguir com o cadastro
let cadastreSe = document.getElementById('cadastroForm').onsubmit = function (event) {
    // Previne o comportamento padrão do formulário (envio e recarregamento da página)
    event.preventDefault();
    // Fecha o formulário(simulando que a pessoa criou uma conta)
    modalCadastro.style.display = "none";
}

// Área de compra, Obter os elementos e
// Abre o modal de itens para a compra..
function abrirModal(idModal) {
    let modalCompra = document.getElementById(idModal);
    modalCompra.style.display = 'block';
}

// Fecha o modal de compra clicando no X
function fecharModal(idModal) {
    let closeModal = document.getElementById(idModal);
    closeModal.style.display = "none"
}

// Cuidando do Finalizar Pedido
/* function abrirCarrinho(idModal){
    const modalCarrinho = document.getElementById(idModal);
    modalCarrinho.style.display = "block"
} */
const modalCarrinho = document.getElementById('resumoPedidoModal')
document.getElementById('resumoPedidoBtn').addEventListener('click', function (event) {
    event.preventDefault(); //Não abre uma outra página
    document.getElementById('resumoPedidoModal').style.display = 'block'; // Mostra o carrinho
});
const items = [
    {
        id: 0,
        nome: 'Pão Françês',
        img: '../img/',
        quantidade: 0,
        valor: '0.60'
    },
    {
        id: 1,
        nome: 'Pão Doce',
        img: '../img/',
        quantidade: 0,
        valor: '1.00'
    },
    {
        id: 2,
        nome: 'Pão Recheado',
        img: '../img/',
        quantidade: 0,
        valor: '1.10'
    },
    {
        id: 3,
        nome: 'Bolo de Chocolate',
        img: '../img/',
        quantidade: 0,
        valor: '15.00'
    },
    {
        id: 4,
        nome: 'Bolo de Milho',
        img: '../img/',
        quantidade: 0,
        valor: '15.00'
    },
    {
        id: 5,
        nome: 'Torta de Maracujá',
        img: '../img/',
        quantidade: 0,
        valor: '12.00'
    },
    {
        id: 6,
        nome: 'Cappuccino de Chocolate',
        img: '../img/',
        quantidade: 0,
        valor: '4.50'
    },
    {
        id: 7,
        nome: 'Cappucino canela com Mel',
        img: '../img/',
        quantidade: 0,
        valor: '5.00'
    },
    {
        id: 8,
        nome: 'Cappuccino Italiano',
        img: '../img/',
        quantidade: 0,
        valor: '5.50'
    },
    {
        id: 9,
        nome: 'Coxinha de Frango',
        img: '../img/',
        quantidade: 0,
        valor: '0.60'
    },
    {
        id: 10,
        nome: 'Bomba de queijo e presunto',
        img: '../img/',
        quantidade: 0,
        valor: '6.00'
    },
    {
        id: 11,
        nome: 'Enrroladinho',
        img: '../img/',
        quantidade: 0,
        valor: '5.00'
    },
    {
        id: 12,
        nome: 'Coca-cola',
        img: '../img/',
        quantidade: 0,
        valor: '5.00'
    },
    {
        id: 13,
        nome: 'Suco de Maracujá',
        img: '../img/',
        quantidade: 0,
        valor: '6.00'
    },
    {
        id: 14,
        nome: 'Suco de Abacaxi',
        img: '../img/',
        quantidade: 0,
        valor: '5.00'
    },
    {
        id: 15,
        nome: 'Pão de queijo Tradicional',
        img: '../img/',
        quantidade: 0,
        valor: '2.00'
    },
    {
        id: 16,
        nome: 'Pão de queijo Recheado',
        img: '../img/',
        quantidade: 0,
        valor: '3.10'
    },
    {
        id: 17,
        nome: 'Pão de queijo Vegano',
        img: '../img/',
        quantidade: 0,
        valor: '3.50'
    },
]

inicializarLoja = () => {
    var container1Produtos = document.getElementById('modalCompra1');
    items.map((val, index) => {
        container1Produtos.innerHTML += `
        <div class="produto-info">
                <div class="info-textual">
                    <p style="color: #000000 !important; margin:0px; font-size:1rem; font-weight:bold;">${val.nome}</p>
                    <p class="mb-1" style="margin-top: 5px;">
                        <span style="font-weight: bold">R$ ${val.valor}</span> 
                        <span class="mb-1" style="margin-top: 5px;"> 
                            <button class="decrementarPedido">-</button> 
                            <input type="number" class="quantidade" value="1" min="0" max="10" data-index="${index}" readonly> 
                            <button class="encrementarPedido">+</button>
                        </span>
                    </p> 
                </div>
                <div class="info-imagem">
                    <img src="${val.img}">
                    <div class="buttonAdicionar">
                        <span class="fas fa-plus"></span>
                    </div>
                </div>
            </div>
    `;
    })

    var container2Produtos = document.getElementById('modalCompra2');
    items.map((val, index) => {
        container2Produtos.innerHTML += `
        <div class="produto-info">
                <div class="info-textual">
                    <p style="color: #000000 !important; margin:0px; font-size:1rem; font-weight:bold;">${val.nome}</p>
                    <p class="mb-1" style="margin-top: 5px;">
                        <span style="font-weight: bold">R$ ${val.valor}</span> 
                        <span class="mb-1" style="margin-top: 5px;"> 
                            <button class="decrementarPedido">-</button> 
                            <input type="number" class="quantidade" value="1" min="0" max="10" data-index="${index}" readonly> 
                            <button class="encrementarPedido">+</button>
                        </span>
                    </p> 
                </div>
                <div class="info-imagem">
                    <img src="${val.img}">
                    <div class="buttonAdicionar">
                        <span class="fas fa-plus"></span>
                    </div>
                </div>
            </div>
        `;
    })
    var container3Produtos = document.getElementById('modalCompra3');
    items.map((val, index) => {
        container3Produtos.innerHTML += `
        <div class="produto-info">
                <div class="info-textual">
                    <p style="color: #000000 !important; margin:0px; font-size:1rem; font-weight:bold;">${val.nome}</p>
                    <p class="mb-1" style="margin-top: 5px;">
                        <span style="font-weight: bold">R$ ${val.valor}</span> 
                        <span class="mb-1" style="margin-top: 5px;"> 
                            <button class="decrementarPedido">-</button> 
                            <input type="number" class="quantidade" value="1" min="0" max="10" data-index="${index}" readonly> 
                            <button class="encrementarPedido">+</button>
                        </span>
                    </p> 
                </div>
                <div class="info-imagem">
                    <img src="${val.img}">
                    <div class="buttonAdicionar">
                        <span class="fas fa-plus"></span>
                    </div>
                </div>
            </div>
        `;
    })
    var container4Produtos = document.getElementById('modalCompra4');
    items.map((val, index) => {
        container4Produtos.innerHTML += `
        <div class="produto-info">
                <div class="info-textual">
                    <p style="color: #000000 !important; margin:0px; font-size:1rem; font-weight:bold;">${val.nome}</p>
                    <p class="mb-1" style="margin-top: 5px;">
                        <span style="font-weight: bold">R$ ${val.valor}</span> 
                        <span class="mb-1" style="margin-top: 5px;"> 
                            <button class="decrementarPedido">-</button> 
                            <input type="number" class="quantidade" value="1" min="0" max="10" data-index="${index}" readonly> 
                            <button class="encrementarPedido">+</button>
                        </span>
                    </p> 
                </div>
                <div class="info-imagem">
                    <img src="${val.img}">
                    <div class="buttonAdicionar">
                        <span class="fas fa-plus"></span>
                    </div>
                </div>
            </div>
        `;
    })
    var container5Produtos = document.getElementById('modalCompra5');
    items.map((val, index) => {
        container5Produtos.innerHTML += `
        <div class="produto-info">
                <div class="info-textual">
                    <p style="color: #000000 !important; margin:0px; font-size:1rem; font-weight:bold;">${val.nome}</p>
                    <p class="mb-1" style="margin-top: 5px;">
                        <span style="font-weight: bold">R$ ${val.valor}</span> 
                        <span class="mb-1" style="margin-top: 5px;"> 
                            <button class="decrementarPedido">-</button> 
                            <input type="number" class="quantidade" value="1" min="0" max="10" data-index="${index}" readonly> 
                            <button class="encrementarPedido">+</button>
                        </span>
                    </p> 
                </div>
                <div class="info-imagem">
                    <img src="${val.img}">
                    <div class="buttonAdicionar">
                        <span class="fas fa-plus"></span>
                    </div>
                </div>
            </div>
        `;
    })
    var container6Produtos = document.getElementById('modalCompra6');
    items.map((val, index) => {
        container6Produtos.innerHTML += `
        <div class="produto-info">
                <div class="info-textual">
                    <p style="color: #000000 !important; margin:0px; font-size:1rem; font-weight:bold;">${val.nome}</p>
                    <p class="mb-1" style="margin-top: 5px;">
                        <span style="font-weight: bold">R$ ${val.valor}</span> 
                        <span class="mb-1" style="margin-top: 5px;"> 
                            <button class="decrementarPedido">-</button> 
                            <input type="number" class="quantidade" value="1" min="0" max="10" data-index="${index}" readonly> 
                            <button class="encrementarPedido">+</button>
                        </span>
                    </p> 
                </div>
                <div class="info-imagem">
                    <img src="${val.img}">
                    <div class="buttonAdicionar">
                        <span class="fas fa-plus"></span>
                    </div>
                </div>
            </div>
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('ProdutosNoCarrinho');
    containerCarrinho.innerHTML = '';
    items.map((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
                <p style="font-weight: bold;">${val.nome}| Quantidade: ${val.quantidade}  | valor: R$${val.valor}</p>
            `;
        }
    });

    // Calculando o valor Final do pedido:
    function calcularTotal() {
        let total = items.reduce((acumulador, val) => {
            let subtotal = val.quantidade * val.valor;
            return acumulador + subtotal;
        }, 0);
        return total.toFixed(2);
    }
    // Chamando a função calcularTotal() para obter o valor total
    let valorTotal = calcularTotal();
    // Selecionando a span onde deve ficar o valor total
    let elementoValorTotal = document.querySelector('#valorTotal');
    // Definindo o texto do elemento com o valor total
    elementoValorTotal.innerHTML = `<span style="font-weight: bold;">Valor Total:</span> R$${valorTotal}`;

}


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('incrementarPedido')) {
        let inputQuantidade = event.target.parentElement.querySelector('.quantidade');
        let quantidade = parseInt(inputQuantidade.value);
        let index = parseInt(inputQuantidade.getAttribute('data-index'));
        inputQuantidade.value = quantidade + 1;
        items[index].quantidade++;

    } else if (event.target.classList.contains('decrementarPedido')) {
        let inputQuantidade = event.target.parentElement.querySelector('.quantidade');
        let index = parseInt(inputQuantidade.getAttribute('data-index'));
        let quantidade = parseInt(inputQuantidade.value);
        if (quantidade > 0) { // Evita que a quantidade fique negativa
            inputQuantidade.value = quantidade - 1;
            items[index].quantidade--;
        }
    }
});

// Adicionar o pedido e sair do modal
function adicionarPedido(idModal) {
    let closeModal = document.getElementById(idModal);
    atualizarCarrinho()
    closeModal.style.display = "none"
}

// Clicar em ver carrinho
function verCarrinho(idmodal){
    let abrirCarrinho = document.getElementById('resumoPedidoModal');
    let closeModal = document.getElementById(idmodal);
    closeModal.style.display = 'none'
    abrirCarrinho.style.display = 'block' 
    } 
    
// Clicar em ver carrinho em telas menores
const maxMobileWidth = 950; 
// Função que será executada quando o tamanho da tela for menor que maxMobileWidth
function verCarrinhoTelasMenores(idmodal) {
    let temItem = items.some(item => item.quantidade > 0)
    if(temItem){
    let closeModal = document.getElementById(idmodal);
    closeModal.style.display = 'none'
    let navbarToggler = document.querySelector('.navbar-toggler');
    let navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('collapse')) {
        navbarToggler.click();
    }
    } else{
    let closeModal = document.getElementById(idmodal);
    closeModal.style.display = 'none'
    let navbarToggler = document.querySelector('.navbar-toggler');
    let navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('collapse')) {
        navbarToggler.click();
    }
}
}
// Função para ser executada em cada uma das telas
function checkScreenSize(idmodal) {
    if (window.innerWidth <= maxMobileWidth) {
        verCarrinhoTelasMenores(idmodal);
    } else{
        verCarrinho(idmodal);
    }
}




// Fechar modal carrinho clicando no X
document.getElementById('closeCarrinho').addEventListener('click', function () {
    document.getElementById('resumoPedidoModal').style.display = 'none';
});

// Limpar Items do modal
document.getElementById('limparCarrinho').addEventListener('click', function () {
    limparCarrinho()
});
function limparCarrinho() {
    items.forEach(function (item) {
        item.quantidade = 0; // Zera a quantidade para cada item
    });
    let inputsQuantidade = document.querySelectorAll('.quantidade');
    inputsQuantidade.forEach(function (input) {
        input.value = 0; // Vai zerar todos os inputs 
    });
    atualizarCarrinho()
    atualizarCarrinhoAoLimpar();
}
atualizarCarrinhoAoLimpar = () => {
    var containerCarrinho = document.getElementById('ProdutosNoCarrinho');
    containerCarrinho.innerHTML += `Escolha seu Pedido!!`;
}


// Fazendo o pedido, ao clicar no FazerPedido/Pedir
document.getElementById('btnFazerPedido').addEventListener('click', function() {
    let temItem = items.some(item => item.quantidade > 0)
    if(temItem ){
    let mensagem = "Olá, gostaria de fazer o seguinte pedido:\n\n";
    let total = 0;
    items.forEach((item) => {
        if (item.quantidade > 0) {
            total += item.quantidade * item.valor;
            mensagem += `|${item.nome} , Quantidade: ${item.quantidade}| \n`;
        }
    });
    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

    enviarWhatsApp(mensagem);} else{alert('Por Favor, faça seu pedido antes de pedir!! \u{1F921}')}
});

function enviarWhatsApp(mensagem) {
    var encodedMessage = encodeURIComponent(mensagem);  //Permite que todos os caracteres diferentes e espaços sejam convertidos em um formato que pode ser enviado pela URL
    var whatsappUrl = `https://wa.me/5599988105045?text=${encodedMessage}`; // Enviando a mensagem
    window.open(whatsappUrl, '_blank'); //Abre em uma nova janela
}


window.onclick = function (event) {
    // Fecha o modal de compra clicando fora dele
    let modais = document.querySelectorAll('.modalCompra')
    // Agora vai passar por cada um:
    modais.forEach(function (modalCompra) {
        if (event.target == modalCompra) {
            modalCompra.style.display = "none"
        }
    });
    // Fecha o formulário cadastro clicando fora dele
    if (event.target == modalLogin) {
        modalLogin.style.display = "none"
    }
    // Fecha o fomulário login clicando fora dele
    if (event.target == modalCadastro) {
        modalCadastro.style.display = "none";
    }
    // Fecha o modal carrinho clicando fora dele
    if (event.target == modalCarrinho) {
        modalCarrinho.style.display = 'none'; // Fecha o modal
    }
}

