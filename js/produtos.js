async function carregarProdutos() {

    try {

        const resposta = await fetch("produtos.json");

        const produtos = await resposta.json();

        const lista =
            document.getElementById("lista-produtos");

        if (!lista) return;

        lista.innerHTML = "";

        lista.className = "produtos-grid";

        produtos.forEach(produto => {

            lista.innerHTML += `

            <div class="produto">

                <img src="${produto.imagem}">

                <div class="produto-info">

                    <h3>${produto.nome}</h3>

                    <p>${produto.categoria}</p>

                    <p>${produto.descricao}</p>

                    <div class="preco">
                        R$ ${produto.preco}
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

        console.error(erro);

    }

}

function toggleMenu() {

    document
        .getElementById("menu")
        .classList
        .toggle("active");

}

window.onload = carregarProdutos;
