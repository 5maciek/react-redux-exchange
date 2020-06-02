import React from 'react';
import './ListTransaction.scss';

function ItemTransaction(props) {
  const { id, name, euroAmount, plnAmount } = props.item;
  return (
    <li key="{id}" className="ItemTransaction">
      <span>{props.index + 1}</span>
      <p className="name">{name}</p>
      <p>
        Euro <span>{euroAmount}</span>
      </p>
      <p>
        Pln <span>{plnAmount}</span>
      </p>
      <button>X</button>
    </li>
  );
}

export default ItemTransaction;
