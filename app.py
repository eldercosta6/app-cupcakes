
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    cupcakes = [
        {"nome": "Cupcake de Chocolate", "descricao": "Cobertura de brigadeiro", "preco": 10.00},
        {"nome": "Cupcake de Morango", "descricao": "Recheio caseiro", "preco": 12.00},
        {"nome": "Cupcake de Nutella", "descricao": "Creme de avelã", "preco": 15.00}
    ]
    return render_template('index.html', cupcakes=cupcakes)

@app.route('/carrinho')
def carrinho():
    return render_template('cart.html')

@app.route('/pagamento')
def pagamento():
    return render_template('payment.html')

@app.route('/confirmacao')
def confirmacao():
    return render_template('success.html')

if __name__ == '__main__':
    app.run(debug=True)
