import React from 'react';
import ItemTransaction from './ItemTransaction.js';
import { connect } from 'react-redux';
import './ListTransaction.scss';

function ListTransaction(props) {
  const { transactions } = props.items;
  console.log('tr', transactions);
  return (
    <div className="listTransaction">
      <ul>
        {transactions.map((item, index) => (
          <ItemTransaction item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state,
  };
};

export default connect(mapStateToProps, null)(ListTransaction);
