window.onload = () => {

renderizarProdutos();

}

function renderizarProdutos(){

const lista =
document.getElementById("lista-produtos");

if(!lista) return;

lista.innerHTML = "";

lista.className = "produtos-grid";

produtos.forEach(produto=>{

lista.innerHTML += `

<div class="produto">

<img src="${produto.imagem}?auto=format&fit=crop&w=800&q=80">

<div class="produto-info">

<h3>${produto.nome}</h3>

<p>${produto.categoria}</p>

<div class="preco">

${produto.preco}

</div>

<a
class="comprar"
href="https://wa.me/5519999999999?text=Tenho interesse em ${produto.nome}"
target="_blank">

Comprar

</a>

</div>

</div>

`;

});

}

function pesquisarProdutos(){

const termo=

document
.getElementById("pesquisa")
.value
.toLowerCase();

const cards=
document.querySelectorAll(".produto");

cards.forEach(card=>{

card.style.display=
card.innerText.toLowerCase().includes(termo)
? "block"
: "none";

});

}

function toggleMenu(){

document
.getElementById("menu")
.classList
.toggle("active");

}
