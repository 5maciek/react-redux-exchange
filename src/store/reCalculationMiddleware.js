import { CHANGE_CURRENCY_VALUE } from '../actions/actionTypes';

const reCalculationMiddleware = store => next => action => {
    
    let result = '';
    //const newAction = {...action, action['abc']: 'abc'};
    if (action.type === CHANGE_CURRENCY_VALUE) {
        const newCalculations = store.getState().transactions.map(item => {
            return { ...item, plnAmount: (item.euroAmount * action.newValue).toFixed(2) }
        });
        const newAction = { ...action, transactions: newCalculations };
        result = next(newAction)
    }else {
        result = next(action)
    }

    return result
}
export default reCalculationMiddleware