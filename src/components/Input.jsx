import React from 'react';

import '../scss/components/_input.scss'

const Input = ({ name, type }) => {
  return (
    <div>
      <span className='input__text'>{name}</span>

      <input type={type} className="input" />
    </div>
  );
};

export default Input;