const INITIAL_STATE = {
  currentCurrencyValue: 4.2,
  transactions: [],
};

export const exchange = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, action.item] };
    case 'REMOVE_TRANSACTION':
      const filteredTransactions = state.transactions.filter(item => item.id !== action.id);
      return { ...state, transactions: filteredTransactions };
    default:
      return state;
  }
};
