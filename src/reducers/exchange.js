import { ADD_TRANSACTION, REMOVE_TRANSACTION, CHANGE_CURRENCY_VALUE } from '../actions/actionTypes'

const INITIAL_STATE = {
  currentCurrencyValue: 4.2,
  transactions: [],
};

export const exchange = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state, transactions: [...state.transactions, action.transaction] };
    case REMOVE_TRANSACTION:
      const filteredTransactions = state.transactions.filter(item => item.id !== action.id);
      return { ...state, transactions: filteredTransactions };
    case CHANGE_CURRENCY_VALUE:
      const newCalculations = state.transactions.map(item => {
        return { ...item, plnAmount: item.euroAmount * action.newValue }
      });
      return { ...state, currentCurrencyValue: action.newValue, transactions: newCalculations };
    default:
      return state;
  }
};
