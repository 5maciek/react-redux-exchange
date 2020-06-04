import React from 'react';

function ItemTransaction(props) {
  const { id, name, euroAmount, plnAmount } = props.transaction;
  return (
    <li className="ItemTransaction">
      <span>{props.index + 1}.</span>
      <p className="name">{name}</p>
      <p className="amount">
        Euro:<span>{euroAmount}</span>
      </p>
      <p className="amount">
        Pln:<span>{plnAmount}</span>
      </p>
      <button onClick={() => props.handleRemove(id)}>X</button>
    </li>
  );
}

export default ItemTransaction;
