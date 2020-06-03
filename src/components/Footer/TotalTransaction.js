import React from 'react';
import { connect } from 'react-redux';
import './TotalTransaction.scss'

function TotalTransaction(props) {
  const { transactions, currentCurrencyValue } = props.transactions;
  
  const totalTransactionsInEuro = transactions.reduce((total, transaction) => total += transaction.euroAmount, 0).toFixed(2);
  const totalTransactionsInPLN = (totalTransactionsInEuro * currentCurrencyValue).toFixed(2);

  return (
    <div className="totalTransaction">
      <p>Total Euro:<span>{totalTransactionsInEuro}</span></p>
      <p>Total PLN:<span>{totalTransactionsInPLN}</span></p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state,
  };
};

export default connect(mapStateToProps, null)(TotalTransaction);
