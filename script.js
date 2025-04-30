document.addEventListener("DOMContentLoaded", function() {
    const lista = document.querySelector(".cupcake-list");
    const cupcakes = [
        {
            nome: "Cupcake de Chocolate",
            preco: 10.00,
            descricao: "Delicioso cupcake de chocolate com cobertura de brigadeiro e granulado"
        },
        {
            nome: "Cupcake de Morango",
            preco: 12.00,
            descricao: "Cupcake de morango com recheio caseiro"
        },
        {
            nome: "Cupcake de Nutella",
            preco: 15.00,
            descricao: "Cupcake sabor creme de avelã"
        }
    ];

    cupcakes.forEach(cupcake => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${cupcake.nome}</h3>
            <p>${cupcake.descricao}</p>
            <strong>R$ ${cupcake.preco.toFixed(2)}</strong>
        `;
        div.classList.add("cupcake");
        lista.appendChild(div);
    });
});
