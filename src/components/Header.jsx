import { useState } from "react";
import Carrinho from "../img/carrinhoCompras.png";
import lupa from "../img/lupa.png";
import ProdutosCarrinho from "./ProdutosCarrinho";

export default function Header({
  logo,
  carrinhoCompras,
  addCarrinho,
  removerDoCarrinho,
  totalValor,
  modificarQuantidade,
}) {
  const [sidebarAberta, setSidebarAberta] = useState(false);
  function alterar() {
    setSidebarAberta(!sidebarAberta);
  }

  function finalizarPedido (){
    alert("Aguarde novas atualizações, Obrigada!")
  }
  return (
    <div className="header">
      <img src={logo} className="logo" />
      <div className="div-pesquisa">
        <input
          className="input"
          placeholder="Qual sobremesa você gostaria de pedir?"
        />
        <button className="button-lupa">
          <img className="img-lupa" src={lupa} />
        </button>
      </div>
      <div>
        <img
          className="carrinho"
          src={sidebarAberta ? carrinhoCompras : Carrinho}
          onClick={alterar}
        />
        <div className={sidebarAberta ? "abrir" : "fechar"}>
          {sidebarAberta && (
            <div className="side-bar">
              <ProdutosCarrinho
                addCarrinho={addCarrinho}
                removerDoCarrinho={removerDoCarrinho}
                modificarQuantidade={modificarQuantidade}
              />
              <div className="container-carrinho-total">
                <div className="container-itens">
                  
                  <div className="total-sidebar">
                    <b>Total</b>
                    <b>{totalValor} €uros</b>
                  </div>
                  <div className="linha">
                  <hr />
                  </div>
                  <button 
                  onClick={finalizarPedido}
                  className="button-finalizar-pedido">
                    Finalizar pedido
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
