import React from 'react';
import './AddTransaction.scss'

function AddTransaction() {
    return (
        <div className="addTransaction">
            <h2>Add transaction</h2>
            <div className="form">
                <div className="inputName">
                    <label for="nameTransaction">Name:</label>
                    <input type='text' id="nameTransaction" required/>
                </div>
                <div className="inputValue">
                    <label for="valueTransaction">Amount in euro:</label>
                    <input type='number' id="valueTransaction"  min ="0" step='0.01' placeholder='0.00' required/>        
                </div>
            </div>
            <button className="add">Add</button>
        </div>
    );
}

export default AddTransaction;
