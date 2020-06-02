export const addItem = (item) => ({
  type: 'ADD_TRANSACTION',
  item,
});

export const removeItem = (item) => ({
  type: 'REMOVE_TRANSACTION',
  item,
});
