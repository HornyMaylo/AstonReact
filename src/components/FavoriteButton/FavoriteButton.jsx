import { useState } from 'react';

import './FavoriteButton.scss';

export function FavoriteButton() {
  const [label, setLabel] = useState(true);
  return (
    <button
      className="favorite__btn"
      onClick={() => setLabel(!label)}
      style={label ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
    >
      {label ? 'Добавить' : 'Удалить'}
    </button>
  );
}
