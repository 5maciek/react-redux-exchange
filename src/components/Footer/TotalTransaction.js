import React from 'react';
import { connect } from 'react-redux';
import './TotalTransaction.scss'

function TotalTransaction(props) {
  const { transactions, currentCurrencyValue } = props.items;
  console.log(props.items);

  const totalTransactionsInEuro = transactions.reduce((total, item) => total += item.euroAmount, 0).toFixed(2);
  const totalTransactionsInPLN = (totalTransactionsInEuro * currentCurrencyValue).toFixed(2);


  return (
    <div className="totalTransaction">
      <p>TOTAL Euro:<span>{totalTransactionsInEuro}</span></p>
      <p>TOTAL PLN:<span>{totalTransactionsInPLN}</span></p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state,
  };
};

export default connect(mapStateToProps, null)(TotalTransaction);
