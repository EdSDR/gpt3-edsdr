import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Vamos construir algo incrível com GPT-3</h1>
      <p>Mais de 300 aplicativos estão fornecendo pesquisa, conversação, preenchimento de texto e outros recursos avançados com a GPT-3 por meio de nossa API.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Seu endereço de E-mail" />
        <button type="button">Comece Agora</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1.600 pessoas solicitaram acesso nas últimas 24 horas</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;