import React, { useState } from 'react';

import '../scss/components/_input.scss'

const Input = React.memo(({ name, type }) => {
  const [text, setText] = useState();

  console.log(name, text);

  return (
    <div>
      <label>
        <span className="input__text">{name}</span>

        <input type={type} className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required />
      </label>
    </div>
  );
})

export default Input;