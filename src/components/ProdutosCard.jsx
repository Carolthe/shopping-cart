export default function ProdutosCard({ item, adicionarAoCarrinho }) {
  return (
    <div>
      <div className="produtos">
        <img className="imagem-cards" src={item.imagem} />
        <div className="paragrafo-cards">
          <p className="descricao-cards">{item.paragrafo}</p>
          <p className="valor-card">{item.valor} €uros</p>
        </div>
        <button
          onClick={() => adicionarAoCarrinho(item)}
          className="button-cards"
        >
          {item.button}
        </button>
      </div>
    </div>
  );
}
