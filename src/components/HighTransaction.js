import React from 'react';
import { connect } from 'react-redux';
import './HighTransaction.scss'

function HighTransaction(props) {
    const { transactions } = props.items;

    const copyTransaction = [...transactions];
    copyTransaction.sort((a, b) => b.euroAmount - a.euroAmount);
    
    return (
        <div className="highTransaction">
            <h2>High Transaction</h2>
            <div className="form">
                <div className="inputValue">
                    <p className="description">Name:</p>
                    <p>{copyTransaction.length > 0 ? copyTransaction[0].name : ""}</p>
                </div>
                <div className="inputValue">
                    <p className="description">Amount in euro:</p>
                    <p>{copyTransaction.length > 0 ? copyTransaction[0].euroAmount : ""}</p>
                </div>
                <div className="inputValue">
                    <p className="description">Amount in pln:</p>
                    <p>{copyTransaction.length > 0 ? copyTransaction[0].plnAmount : ""}</p>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state,
    };
};

export default connect(mapStateToProps, null)(HighTransaction);
