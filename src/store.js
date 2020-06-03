import { createStore } from 'redux';
import { exchange } from './reducers/exchange';

export const store = createStore(exchange);
