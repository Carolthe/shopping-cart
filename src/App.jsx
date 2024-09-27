import "./App.css";
// Componentes
import Header from "./components/Header";
import Templete from "./components/Templete";
import ProdutosCard from "./components/ProdutosCard";
import Footer from "./components/Footer";

// Imagens
import logo from "./img/logo.png";
import fechar from "./img/fechar.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import pinterest from "./img/pinterest.png";
import { useEffect, useState } from "react";
import { sobremesas } from "./dados/sobremesas.js";

function App() {
  const [addCarrinho, setAddCarrinho] = useState([]);
  const [totalValor, setTotalValor] = useState(0);

  function adicionarAoCarrinho(produto) {
    const produtoExiste = addCarrinho.find((item) => item.id === produto.id);

    if (produtoExiste) {
      const index = addCarrinho.findIndex((item) => item.id === produto.id);

      addCarrinho[index].quantidade++;

      setAddCarrinho([...addCarrinho]);
      return;
    }

    setAddCarrinho([...addCarrinho, produto]);
  }

  function removerDoCarrinho(id) {
    setAddCarrinho(addCarrinho.filter((item) => item.id !== id));
  }

  function somarValorCarrinho() {
    const totalValor = addCarrinho.reduce(
      (total, item) => total + item.valor * item.quantidade,
      0
    );
    setTotalValor(totalValor);
  }

  function modificarQuantidade(id, operador) {
    const produtoExiste = addCarrinho.find((item) => item.id === id);

    if (produtoExiste) {
      const index = addCarrinho.findIndex((item) => item.id === id);

      switch (operador) {
        case "+":
          addCarrinho[index].quantidade++;
          break;
        case "-":
          if (addCarrinho[index].quantidade - 1 > 0) {
            addCarrinho[index].quantidade--;
          }
          break;
      }

      setAddCarrinho([...addCarrinho]);
      return;
    }
  }

  useEffect(() => {
    somarValorCarrinho();
  }, [addCarrinho]);

  return (
    <div>
      <Header
        logo={logo}
        carrinhoCompras={fechar}
        addCarrinho={addCarrinho}
        removerDoCarrinho={removerDoCarrinho}
        totalValor={totalValor}
        modificarQuantidade={modificarQuantidade}
      />
      <div className="div-img">
        <Templete descricao="Delicious Cakes" />
      </div>
      <div className="container-cards">
        {sobremesas.map((item) => (
          <ProdutosCard
            key={item.id}
            item={item}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
      <Footer img1={facebook} img2={instagram} img3={pinterest} />
    </div>
  );
}
export default App;
