import { transactions } from './reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

const logger = createLogger();
const rootReducer = combineReducers({form: formReducer, transactions});
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;