import classNames from 'classnames';
import React, { useState } from 'react';

const ChangeViewForm = () => {
  const [view, setView] = useState('individual');

  const handleView = (e) => {
    setView(e.target.name);
  }

  return (
    <div className="handle">
      <button
        className={classNames('handle__text', { 'handle__text--active': view === 'individual' })}
        name="individual"
        onClick={handleView}>
        Фіз. особа
      </button>

      <button
        className={classNames('handle__text', { 'handle__text--active': view === 'entity' })}
        name="entity"
        onClick={handleView}
      >
        Юр. особа
      </button>
    </div>
  );
};

export default ChangeViewForm;