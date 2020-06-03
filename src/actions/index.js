export const addItem = (item) => ({
  type: 'ADD_TRANSACTION',
  item,
});

export const removeItem = (id) => ({
  type: 'REMOVE_TRANSACTION',
  id,
});

export const changeCurrencyValue = (newValue) => ({
  type: 'CHANGE_CURRENCY_VALUE',
  newValue,
});
