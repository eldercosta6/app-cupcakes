
document.addEventListener("DOMContentLoaded", function() {
    const lista = document.querySelector(".cupcake-list");
    const cupcakes = [
        { nome: "Chocolate", preco: 6.50 },
        { nome: "Baunilha", preco: 5.00 },
        { nome: "Red Velvet", preco: 7.00 }
    ];
    cupcakes.forEach(cupcake => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${cupcake.nome}</strong><br>R$ ${cupcake.preco.toFixed(2)}`;
        lista.appendChild(div);
    });
});
