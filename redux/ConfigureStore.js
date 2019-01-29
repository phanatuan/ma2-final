import { transactions } from './transactionItem';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { displayDate } from './displayDate';
 
const logger = createLogger();
const rootReducer = combineReducers({form: formReducer, transactions, displayDate});
export const store = createStore(rootReducer, applyMiddleware(logger));

// export default store;