import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Mais sobre GPT-3" text="GPT-3, ou ''third generation Generative Pre-trained Transformer'', é um modelo de aprendizado de máquina de rede neural treinado usando dados da Internet para gerar qualquer tipo de texto. Desenvolvido pela OpenAI, ele requer uma pequena quantidade de texto de entrada para gerar grandes volumes de texto gerado por máquina sofisticado e relevante." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">As possibilidades estão além da sua imaginação.</h1>
      <p>Explore a biblioteca</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Como o GPT-3 funciona?" text="GPT-3 é um modelo de previsão de linguagem. Isso significa que ele tem um modelo de aprendizado de máquina de rede neural que pode pegar o texto de entrada como uma entrada e transformá-lo no que prevê que será o resultado mais útil." />
      <Feature title="Quais são os benefícios do GPT-3?" text="Sempre que uma grande quantidade de texto precisa ser gerada a partir de uma máquina com base em uma pequena quantidade de entrada de texto, o GPT-3 oferece uma boa solução. Existem muitas situações em que não é prático ou eficiente ter um humano disponível para gerar a saída de texto, ou pode haver a necessidade de geração automática de texto que parece humano." />
      <Feature title="Quais são os riscos e limitações do GPT-3?" text="Embora o GPT-3 seja notavelmente grande e poderoso, ele tem várias limitações e riscos associados ao seu uso. O maior problema é que o GPT-3 não está aprendendo constantemente. Ele foi pré-treinado, o que significa que não possui uma memória contínua de longo prazo que aprende com cada interação." />
    </div>
  </div>
);

export default WhatGPT3;