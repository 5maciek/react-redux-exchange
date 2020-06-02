import React from 'react';
import './HighTransaction.scss'

function HighTransaction() {
    return (
        <div className="highTransaction">
            <h2>High Transaction</h2>
            <div className="form">
                <div className="inputValue">
                    <p className="description">Name:</p>
                    <p>zakup roweru</p>
                </div>
                <div className="inputValue">
                    <p className="description">Amount in euro:</p>
                    <p>21</p>
                </div>
                <div className="inputValue">
                    <p className="description">Amount in pln:</p>
                    <p>129</p>
                </div>
            </div>           
        </div>
    );
}

export default HighTransaction;
