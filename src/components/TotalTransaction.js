import React from 'react';
import './TotalTransaction.scss';

function TotalTransaction() {
  return (
    <div className="totalTransaction">
      <p>
        TOTAL Euro<span>123</span>
      </p>
      <p>
        TOTAL PLN<span>4567</span>
      </p>
    </div>
  );
}

export default TotalTransaction;
