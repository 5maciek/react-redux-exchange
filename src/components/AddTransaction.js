import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { v1 as uuidv1 } from 'uuid';
import './AddTransaction.scss';

function AddTransaction(props) {
  const [inputName, setInputName] = useState('');
  const [euroAmount, setEuroAmount] = useState(0);
  
  const handleAddTransaction = () => {
    const amountInPLN = euroAmount * props.items.currentCurrencyValue;
    const transaction = {
      id: uuidv1(),
      name: inputName,
      euroAmount: parseFloat(euroAmount.toFixed(2)),
      plnAmount: parseFloat(amountInPLN.toFixed(2)),
    };
    props.add_Item(transaction);
    setInputName('');
    setEuroAmount(0);
  };

  return (
    <div className="addTransaction">
      <h2>Add transaction</h2>
      <div className="form">
        <div className="inputName">
          <label htmlFor="nameTransaction">Name:</label>
          <input
            type="text"
            id="nameTransaction"
            value={inputName}
            required
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
        <div className="inputValue">
          <label htmlFor="valueTransaction">Amount in euro:</label>
          <input
            type="number"
            id="valueTransaction"
            min="0"
            step="0.01"
            placeholder="0.00"
            required
            value={euroAmount}
            onChange={(e) => setEuroAmount(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <button className="add" onClick={handleAddTransaction}>
        Add
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_Item: (item) => dispatch(addItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
