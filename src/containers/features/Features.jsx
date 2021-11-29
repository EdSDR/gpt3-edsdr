import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Por que lançar um produto comercial?',
    text: 'Em última análise, o que mais nos preocupa é garantir que a inteligência artificial geral beneficie a todos. Vemos o desenvolvimento de produtos comerciais como uma das maneiras de garantir que temos financiamento suficiente para ter sucesso.',
  },
  {
    title: 'Por que lançar uma API em vez de abrir o código dos modelos?',
    text: 'Comercializar a tecnologia nos ajuda a pagar por nossos esforços contínuos de pesquisa, segurança e política de IA.',
  },
  {
    title: 'O que a OpenAI fará com relação ao uso indevido da API?',
    text: 'Para a API, podemos prevenir melhor o uso indevido, limitando o acesso a clientes e casos de uso aprovados. Temos um processo obrigatório de revisão da produção antes que as aplicações propostas possam ir ao ar.',
  },
  {
    title: 'Como mitigar tendências prejudiciais e outros efeitos negativos dos modelos servidos pela API?',
    text: 'Mitigar efeitos negativos, como tendências prejudiciais, é uma questão difícil em todo o setor e extremamente importante. Conforme discutimos no documento GPT-3 e no cartão de modelo, nossos modelos de API exibem tendências que serão refletidas no texto gerado.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">O futuro é agora e você só precisa realizá-lo. Dê um passo para o futuro hoje. e Faça acontecer.</h1>
      <p>Solicite acesso antecipado para começar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
