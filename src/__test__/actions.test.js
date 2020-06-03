import * as actions from '../actions/index';
import * as types from '../actions/actionTypes';

describe('actions', () => {
  xit('should create an action to add a transaction', () => {
    const transaction = {
      id: 1,
      name: 'transaction',
      euroAmount: 1,
      plnAmount: 4.2,
    };
    const expectedAction = {
      type: types.ADD_TRANSACTION,
      transaction,
    };
    expect(actions.addItem(transaction)).toEqual(expectedAction);
  });

  it('should create an action to remove a transaction', () => {
    const id = 2;
    const expectedAction = {
      type: types.REMOVE_TRANSACTION,
      id,
    };
    expect(actions.removeItem(id)).toEqual(expectedAction);
  });

  it('should create an action to change currency value', () => {
    const newValue = 5.11;
    const expectedAction = {
      type: types.CHANGE_CURRENCY_VALUE,
      newValue,
    };
    expect(actions.changeCurrencyValue(newValue)).toEqual(expectedAction);
  });
});
