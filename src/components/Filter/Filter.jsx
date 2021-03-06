import React from 'react';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;
