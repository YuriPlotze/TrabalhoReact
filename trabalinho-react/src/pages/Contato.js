import React, { useState } from 'react';
import '../styles/Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  return (
    <div className="contato-container">
      <div className="contato-text">
        <h2>Contato</h2>
        <p>Para mais informações, dúvidas ou agendamentos, entre em contato conosco:</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="contato-mapa">
        <iframe
          title="Localização da Gymteck"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.178140868811!2d-46.65641962494009!3d-23.594299167867514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c872469ffb%3A0x3d1f31c6b8cf1ae!2sAv.%20Paulista%2C%20São%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1sen!2sus!4v1696538987284!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contato;
