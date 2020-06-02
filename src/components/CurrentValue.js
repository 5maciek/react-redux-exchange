import React from 'react';
import './CurrentValue.scss';

function CurrentValue() {
  return (
    <div className="setValues">
      <h2>Set current value</h2>
      <div className="form">
        <label for="currencyValue">1 Euro = </label>
        <input
          type="number"
          id="currencyValue"
          required
          min="0"
          step="0.01"
          placeholder="0.00"
        />
        <p>PLN</p>
      </div>
      <button className="save">Save</button>
    </div>
  );
}

export default CurrentValue;
