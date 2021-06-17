import React from 'react';

function Input({ type, name, value, ...others }) {
  return (
    <input
      type={type}
      name={name} 
      value={value}
      {...others}
    />
  );
}

export default Input;