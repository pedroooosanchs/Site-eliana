async function carregarProdutos() {

    try {

        const resposta = await fetch("produtos.json");

        const produtos = await resposta.json();

        const listaProdutos =
            document.getElementById("lista-produtos");

        if (!listaProdutos) return;

        listaProdutos.innerHTML = "";

        listaProdutos.classList.add("produtos-grid");

        produtos.forEach(produto => {

            listaProdutos.innerHTML += `

                <div class="produto">

                    <img src="${produto.imagem}" alt="${produto.nome}">

                    <div class="produto-info">

                        <h3>${produto.nome}</h3>

                        <p>${produto.categoria}</p>

                        <p>${produto.descricao}</p>

                        <div class="preco">
                            R$ ${Number(produto.preco).toFixed(2)}
                        </div>

                        <a
                            class="comprar"
                            target="_blank"
                            href="https://wa.me/5519999999999?text=Olá! Tenho interesse em ${produto.nome}">

                            Comprar

                        </a>

                    </div>

                </div>

            `;

        });

    }

    catch (erro) {

        console.error("Erro ao carregar produtos:", erro);

    }

}

window.addEventListener("DOMContentLoaded", carregarProdutos);
