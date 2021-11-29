import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicite acesso antecipado para começar</h4>
      <h1 className="gradient__text">As possibilidades são <br /> alem da sua imaginação</h1>
      <p>Nosso objetivo é continuar a desenvolver nossa compreensão dos danos potenciais da API em cada contexto de uso e melhorar continuamente nossas ferramentas e processos para ajudar a minimizá-los.</p>
      <h4>Solicite acesso antecipado para começar</h4>
    </div>
  </div>
);

export default Possibility;
