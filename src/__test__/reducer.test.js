import { exchange } from '../reducers/exchange';
import { store } from '../store/index';
import * as types from '../actions/ActionTypes';
import { addItem } from '../actions';

describe('transactions reducer', () => {
  it('should return the initial state', () => {
    expect(exchange(undefined, {})).toEqual({
      currentCurrencyValue: 4.2,
      transactions: [],
    });
  });

  it('should handle ADD_TRANSACTION', () => {
    const transaction = {
      id: 1,
      name: 'transaction',
      euroAmount: 1,
      plnAmount: 4.2,
    };
    expect(
      exchange(
        {
          currentCurrencyValue: 4.2,
          transactions: [],
        },
        {
          type: types.ADD_TRANSACTION,
          transaction: transaction,
        }
      )
    ).toEqual({
      currentCurrencyValue: 4.2,
      transactions: [
        { id: 1, name: 'transaction', euroAmount: 1, plnAmount: 4.2 },
      ],
    });

    const nextTransaction = {
      id: 2,
      name: 'transaction next',
      euroAmount: 2,
      plnAmount: 8.4,
    };
    expect(
      exchange(
        {
          currentCurrencyValue: 4.2,
          transactions: [
            { id: 1, name: 'transaction', euroAmount: 1, plnAmount: 4.2 },
          ],
        },
        {
          type: types.ADD_TRANSACTION,
          transaction: nextTransaction,
        }
      )
    ).toEqual({
      currentCurrencyValue: 4.2,
      transactions: [
        { id: 1, name: 'transaction', euroAmount: 1, plnAmount: 4.2 },
        { id: 2, name: 'transaction next', euroAmount: 2, plnAmount: 8.4 },
      ],
    });
  });

  it('should handle REMOVE_TRANSACTION', () => {
    expect(
      exchange(
        {
          currentCurrencyValue: 4.2,
          transactions: [
            { id: 1, name: 'transaction', euroAmount: 1, plnAmount: 4.2 },
            { id: 2, name: 'transaction next', euroAmount: 2, plnAmount: 8.4 },
          ],
        },
        {
          type: types.REMOVE_TRANSACTION,
          id: 1,
        }
      )
    ).toEqual({
      currentCurrencyValue: 4.2,
      transactions: [
        { id: 2, name: 'transaction next', euroAmount: 2, plnAmount: 8.4 },
      ],
    });
  });

  it('should handle CHANGE_CURRENCY_VALUE', () => {
    expect(
      exchange(
        {
          currentCurrencyValue: 4.2,
          transactions: [
            { id: 2, name: 'transaction next', euroAmount: 2, plnAmount: 8.4 },
          ],
        },
        {
          type: types.CHANGE_CURRENCY_VALUE,
          newValue: 5.11,
        }
      )
    ).toEqual({
      currentCurrencyValue: 5.11,
      transactions: [
        { id: 2, name: 'transaction next', euroAmount: 2, plnAmount: 10.22 },
      ],
    });
  });
});
