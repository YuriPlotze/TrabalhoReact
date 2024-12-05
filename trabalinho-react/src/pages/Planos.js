import React from 'react';
import '../styles/Planos.css';
import PlanosTabela from '../components/PlanosTabela';

const Planos = () => {
  const planos = [
    { nome: 'Básico', beneficios: 'Acesso aos equipamentos e área de musculação', preco: 'R$ 99,90/mês' },
    { nome: 'Avançado', beneficios: 'Acesso completo, incluindo aulas em grupo e personal trainers', preco: 'R$ 149,90/mês' },
    { nome: 'Premium', beneficios: 'Todos os benefícios do plano avançado, mais massagens e spa', preco: 'R$ 199,90/mês' },
  ];

  return (
    <div className="planos-container">
      <div className="image-container">
        <img
          src={require('../assets/ImagemParaPlanos.jpg')}
          alt="Academia"
          className="planos-image"
        />
      </div>
      <div className="table-container">
        <h2>Planos de Assinatura</h2>
        <p>Confira nossos planos de assinatura e escolha o que melhor se adapta às suas necessidades!</p>
        <PlanosTabela planos={planos} />
      </div>
    </div>
  );
};

export default Planos;
