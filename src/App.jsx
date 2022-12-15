import React from "react";

const titulo = <h1>Esse é um título</h1>;

const App = () => {
  const nome = "Victor";
  const ativo = true;

  function soma(x = 1) {
    return 1 + 1 + x;
  }

  const carro = {
    marca: "Ford",
    rodas: 4,
  };

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };

  return (
    <>
      {titulo}
      {soma(5)}
      <div>
        <a className="ativo" href="http://google.com.br">
          Google
        </a>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
        <p className={ativo ? "ativo" : "inativo"}>{nome}</p>
      </div>
      <p style={estiloP}>{carro.marca}</p>
    </>
  );
};

export default App;
