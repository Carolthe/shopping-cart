import lixo from "../img/lixo.png";

export default function ProdutosCarrinho({
  addCarrinho,
  removerDoCarrinho,
  modificarQuantidade,
}) {
  return (
    <div className="cards-carrinho">
      {addCarrinho.map((item) => (
        <div className="container-card-carrinho" key={item.id}>
          <div className="img-add">
            <img className="imagem-card-carrinho" src={item.imagem} />
          </div>
          <div className="carrinho-descricao">
            
              <p className="produto-add">{item.paragrafo}</p>
              <p className="valor-produtos-carrinho">{item.valor} €uros</p>
              <div className="container-quantidade">
                <button
                  className="quantidade"
                  onClick={() => modificarQuantidade(item.id, "-")}
                >
                  -
                </button>
                <p className="numero-produtos">{item.quantidade}</p>
                <button
                  className="quantidade"
                  onClick={() => modificarQuantidade(item.id, "+")}
                >
                  +
                </button>
            </div>
          </div>

          <button
            className="remover"
            onClick={() => removerDoCarrinho(item.id)}
          >
            <img src={lixo} />
          </button>
        </div>
      ))}
    </div>
  );
}
