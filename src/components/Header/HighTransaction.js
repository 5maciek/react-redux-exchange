import React from 'react';
import { connect } from 'react-redux';
import './HighTransaction.scss';

function HighTransaction(props) {
  const { transactions } = props.transactions;
  transactions.sort((a, b) => b.euroAmount - a.euroAmount);

  return (
    <div className="highTransaction">
      <h2>High Transaction</h2>
      <div className="form">
        <div className="inputValue">
          <p className="description">Name:</p>
          <span>{transactions.length > 0 ? transactions[0].name : ''}</span>
        </div>
        <div className="inputValue">
          <p className="description">Amount in euro:</p>
          <span>
            {transactions.length > 0 ? transactions[0].euroAmount : ''}
          </span>
        </div>
        <div className="inputValue">
          <p className="description">Amount in pln:</p>
          <span>
            {transactions.length > 0 ? transactions[0].plnAmount : ''}
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state,
  };
};

export default connect(mapStateToProps, null)(HighTransaction);
