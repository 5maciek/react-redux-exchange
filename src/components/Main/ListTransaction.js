import React from 'react';
import ItemTransaction from './ItemTransaction.js';
import { removeItem } from '../../actions';
import { connect } from 'react-redux';
import './ListTransaction.scss';

function ListTransaction(props) {
  const handleRemoveTransaction = (id) => {
    props.remove_Item(id);
  }

  const { transactions } = props.transactions;  
  return (
    <div className="listTransaction">
      <ul>
        {transactions.map((transaction, index) => (
          <ItemTransaction key={transaction.id} transaction={transaction} index={index} handleRemove = {handleRemoveTransaction} />
        ))}
      </ul>
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
    remove_Item: (transaction) => dispatch(removeItem(transaction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTransaction);
