import React from 'react';
import '../styles/Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre-container">
      <section className="sobre-introducao">
        <h2>Sobre a Gymteck</h2>
        <p>
          A Gymteck é uma academia moderna, equipada com tecnologia de ponta e uma equipe de profissionais altamente qualificados. Nossa missão é promover saúde, bem-estar e qualidade de vida para todos os nossos clientes.
        </p>
        <img
          src={require('../assets/ImagemParaSobre1.jpg')}
          alt="Academia moderna"
          className="sobre-imagem"
        />
      </section>

      <section className="sobre-diferenciais">
        <div className="diferenciais-texto">
          <h3>Por que escolher a Gymteck?</h3>
          <ul>
            <li>Equipamentos de última geração.</li>
            <li>Aulas em grupo dinâmicas e motivadoras.</li>
            <li>Personal trainers altamente qualificados.</li>
            <li>Ambiente limpo, seguro e acolhedor.</li>
            <li>Planos flexíveis para atender todas as necessidades.</li>
          </ul>
        </div>

        <div className="diferenciais-imagem">
          <img
            src={require('../assets/ImagemParaSobre2.jpg')}
            alt="Equipe Gymteck"
          />
        </div>
      </section>
    </div>
  );
};

export default Sobre;
