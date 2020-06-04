import { ADD_TRANSACTION, REMOVE_TRANSACTION, CHANGE_CURRENCY_VALUE } from '../actions/actionTypes'

const INITIAL_STATE = {
  currentCurrencyValue: 4.2,
  transactions: [],
};

export const exchange = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      console.log(action);
      return { ...state, transactions: [...state.transactions, action.transaction] };
    case REMOVE_TRANSACTION:
      console.log(action);
      const filteredTransactions = state.transactions.filter(item => item.id !== action.id);
      return { ...state, transactions: filteredTransactions };
    case CHANGE_CURRENCY_VALUE:
      // console.log(action);
      // const newCalculations = state.transactions.map(item => {
      //   return { ...item, plnAmount: item.euroAmount * action.newValue }
      // });
      return { ...state, currentCurrencyValue: action.newValue, transactions: action.transactions };
    default:
      return state;
  }
};
