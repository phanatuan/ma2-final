import React from 'react';
import {Main} from './components/MainComponent';
import { Provider } from 'react-redux';
import { transactions } from './redux/transactionItem';
import { displayDate } from './redux/displayDate';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { store } from './redux/ConfigureStore';

// const logger = createLogger();
// const rootReducer = combineReducers({
//   form: formReducer, 
//   displayDate,
//   transactions
// });

// export const store = createStore(rootReducer, applyMiddleware(logger));

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <Main />
      </Provider>
    );
  }
}