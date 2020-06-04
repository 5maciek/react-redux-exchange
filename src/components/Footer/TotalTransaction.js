import React from 'react';
import { connect } from 'react-redux';
import './TotalTransaction.scss'

function TotalTransaction(props) {
  const { transactions, currentCurrencyValue } = props.transactions;
  
  const totalTransactionsInEuro = transactions.reduce((total, transaction) => total += transaction.euroAmount, 0).toFixed(2);
  const totalTransactionsInPLN = (totalTransactionsInEuro * currentCurrencyValue).toFixed(2);

  return (
    <div className="totalTransaction">      
    <div class='displayTotal'>
      <p className="totalName">Total Euro:<span className="totalValue">{totalTransactionsInEuro}</span></p>
      
      <p className="totalName">Total Pln:<span className="totalValue">{totalTransactionsInPLN}</span></p>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state,
  };
};

export default connect(mapStateToProps, null)(TotalTransaction);
