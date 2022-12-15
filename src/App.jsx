import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const totalGasto = (dados) => {
  const preco = dados.compras
  const precoMap = preco.map(valor => Number(valor.preco.replace('R$ ', ''))).reduce((acumulador, item) => acumulador + item);
  
  return precoMap
}

const App = () => {
  const dados = mario;

  return <div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade} </p>
    <p>Situação: 
     <span style={{ color: dados.ativa ? 'green' : 'red'}}> {dados.ativa ? 'ativa' : 'inativa'} </span>
    </p>
    
    <p>Total gasto: R${totalGasto(dados)}</p>
    <p>{totalGasto(dados) > 10000 && 'você está gastando demais'}</p>
  </div>;
};

export default App;