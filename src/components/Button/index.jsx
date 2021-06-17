import React from 'react';

function Botao({ type, nome }) {
  return (
    <button type={type}>
      {nome}
    </button>
  );
}

export default Botao;