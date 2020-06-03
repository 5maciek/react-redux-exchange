import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';
import { v1 as uuidv1 } from 'uuid';
import './AddTransaction.scss';

function AddTransaction(props) {
  const [inputName, setInputName] = useState('');
  const [euroAmount, setEuroAmount] = useState(0);

  const handleAddTransaction = () => {
    if (inputName && euroAmount) {
      const amountInPLN = euroAmount * props.transactions.currentCurrencyValue;
      const transaction = {
        id: uuidv1(),
        name: inputName,
        euroAmount: parseFloat(euroAmount.toFixed(2)),
        plnAmount: parseFloat(amountInPLN.toFixed(2)),
      };
      props.add_Item(transaction);
      setInputName('');
      setEuroAmount(0);
    }
    else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="addTransaction">
      <h2>Add transaction</h2>
      <div className="form">
        <div className="inputForm">
          <label htmlFor="nameTransaction">Name:</label>
          <input
            className="inputName"
            type="text"
            id="nameTransaction"
            value={inputName}
            required
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
        <div className="inputForm">
          <label htmlFor="valueTransaction">Amount in euro:</label>
          <input
            className="inputAmount"
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
    transactions: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_Item: (transaction) => dispatch(addItem(transaction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
