import { createStore, applyMiddleware } from 'redux';
import reCalculationMiddleware from './reCalculationMiddleware';
import { exchange } from '../reducers/exchange';

export const store = createStore(exchange, applyMiddleware(reCalculationMiddleware));
