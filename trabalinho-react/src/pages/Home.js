import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="section">
        <img
          src={require('../assets/ImagemParaHome1.jpg')}
          alt="Primeira imagem de academia"
          className="home-image"
        />
        <div className="home-text">
          <h2>Bem-vindo à Gymteck!</h2>
          <p>
            Na Gymteck, acreditamos que um corpo saudável é o caminho para uma vida equilibrada.
            Oferecemos treinos personalizados para ajudá-lo a atingir seus objetivos!
          </p>
        </div>
      </div>

      <div className="section">
        <div className="home-text">
          <h2>Por que escolher a Gymteck?</h2>
          <p>
            Temos infraestrutura de ponta e uma equipe dedicada de profissionais para guiá-lo
            em sua jornada fitness. Sua transformação começa aqui!
          </p>
        </div>
        <img
          src={require('../assets/ImagemParaHome2.jpg')}
          alt="Segunda imagem de academia"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default Home;
