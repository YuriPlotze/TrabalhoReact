import React from 'react';

const PlanosTabela = ({ planos }) => {
    return (
        <table className="planos-table">
            <thead>
                <tr>
                    <th>Plano</th>
                    <th>Benefícios</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {planos.map((plano, index) => (
                    <tr key={index}>
                        <td>{plano.nome}</td>
                        <td>{plano.beneficios}</td>
                        <td>{plano.preco}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PlanosTabela;
