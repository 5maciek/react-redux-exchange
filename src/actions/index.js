export const addItem = (item) => ({
  type: 'ADD_TRANSACTION',
  item,
});

export const removeItem = (id) => ({
  type: 'REMOVE_TRANSACTION',
  id,
});
