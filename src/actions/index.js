  import {ADD_TRANSACTION,REMOVE_TRANSACTION, CHANGE_CURRENCY_VALUE} from './actionTypes'

export const addItem = (transaction) => ({
  type: ADD_TRANSACTION,
  transaction,
});

export const removeItem = (id) => ({
  type: REMOVE_TRANSACTION,
  id,
});

export const changeCurrencyValue = (newValue) => ({
  type: CHANGE_CURRENCY_VALUE,
  newValue,
});
