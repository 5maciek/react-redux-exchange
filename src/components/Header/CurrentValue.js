import React, {useState} from 'react';
import { connect } from 'react-redux';
import { changeCurrencyValue } from '../../actions';
import './CurrentValue.scss'

function CurrentValue(props) {
  const [currencyValue, setCurrencyValue] = useState(0);

  const handleSaveNewCurrencyValue = () => {    
    props.change_CurrencyValue(currencyValue);
    setCurrencyValue(0);
  }

  return (
    <div className="setValues">
      <h2>Set current value</h2>
      <div className="form">
        <label htmlFor="currencyValue">1 Euro = </label>
        <input type='number' id="currencyValue"  required min ="0" step='0.01' placeholder='0.00' value={currencyValue} onChange={(e) => setCurrencyValue(parseFloat(e.target.value))}/>
        <p>PLN</p>
      </div>
      <button className="save" onClick={handleSaveNewCurrencyValue}>Save</button>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    change_CurrencyValue: (newValue) => dispatch(changeCurrencyValue(newValue)),
  };
};


export default connect(null, mapDispatchToProps)(CurrentValue);
