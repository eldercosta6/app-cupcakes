document.addEventListener("DOMContentLoaded", function () {
    const lista = document.querySelector(".cupcake-list");
    const cupcakes = [
        {
            nome: "Cupcake de Chocolate",
            preco: 10.00,
            descricao: "Cobertura de brigadeiro com granulado",
            imagem: "img/chocolate.jpg"
        },
        {
            nome: "Cupcake de Morango",
            preco: 12.00,
            descricao: "Recheio caseiro com calda de morango",
            imagem: "img/morango.jpg"
        },
        {
            nome: "Cupcake de Nutella",
            preco: 15.00,
            descricao: "Cobertura de creme de avelã com pedaços crocantes",
            imagem: "img/nutella.jpg"
        },
        {
            nome: "Cupcake de M&Ms",
            preco: 15.00,
            descricao: "Cobertura com confeitos coloridos de chocolate",
            imagem: "img/mms.jpg"
        },
        {
            nome: "Cupcake de Bolo de Cenoura com Chocolate",
            preco: 13.00,
            descricao: "Cobertura de brigadeiro sobre massa de cenoura",
            imagem: "img/cenoura.jpg"
        }
    ];

    cupcakes.forEach(cupcake => {
        const div = document.createElement("div");
        div.className = "cupcake";
        div.innerHTML = `
            <img src="${cupcake.imagem}" alt="${cupcake.nome}">
            <h3>${cupcake.nome}</h3>
            <p>${cupcake.descricao}</p>
            <strong>R$ ${cupcake.preco.toFixed(2)}</strong>
            <button class="botao">Adicionar</button>
        `;
        div.querySelector("button").addEventListener("click", () => {
            const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            const existente = carrinho.find(item => item.nome === cupcake.nome);
            if (existente) {
                existente.quantidade += 1;
            } else {
                carrinho.push({ ...cupcake, quantidade: 1 });
            }
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            alert("Adicionado ao carrinho!");
        });
        lista.appendChild(div);
    });
});
