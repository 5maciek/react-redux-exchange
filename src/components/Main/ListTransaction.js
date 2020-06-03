import React from 'react';
import ItemTransaction from './ItemTransaction.js';
import { removeItem } from '../../actions';
import { connect } from 'react-redux';
import './ListTransaction.scss';

function ListTransaction(props) {
  const handleRemoveTransaction = (id) => {
    props.remove_Item(id);
  }

  const { transactions } = props.items;  
  return (
    <div className="listTransaction">
      <ul>
        {transactions.map((item, index) => (
          <ItemTransaction key={item.id} item={item} index={index} handleRemove = {handleRemoveTransaction} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    remove_Item: (item) => dispatch(removeItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTransaction);
