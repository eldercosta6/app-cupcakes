document.addEventListener("DOMContentLoaded", function () {
    const lista = document.querySelector(".cupcake-list");
    const cupcakes = [
        {
            nome: "Cupcake de Chocolate",
            preco: 10.00,
            descricao: "Cobertura de brigadeiro com granulado"
        },
        {
            nome: "Cupcake de Morango",
            preco: 12.00,
            descricao: "Recheio caseiro com calda de morango"
        },
        {
            nome: "Cupcake de Nutella",
            preco: 15.00,
            descricao: "Cobertura de creme de avelã e pedaços crocantes"
        }
    ];
    cupcakes.forEach(cupcake => {
        const div = document.createElement("div");
        div.className = "cupcake";
        div.innerHTML = `
            <h3>${cupcake.nome}</h3>
            <p>${cupcake.descricao}</p>
            <strong>R$ ${cupcake.preco.toFixed(2)}</strong>
            <button class="botao">Adicionar</button>
        `;
        lista.appendChild(div);
    });
});

