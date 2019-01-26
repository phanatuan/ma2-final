import {ADD_TRANSACTION_ITEM, UPDATE_TRANSACTION_ITEM, DELETE_TRANSACTION_ITEM} from './ActionTypes';

const initialState = {
    transactions: [
        {
                id: 0,
                amount: 10000,
                description: 'Buy A Book',
                currency: 'VND',
                category: 'Food',
                date: '10/1/2019'
        },
    ]
}

export const transactions = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TRANSACTION_ITEM:
            const {id, item} = action.payload
            const newItem = {id: id, ...item}
            return {...state, transactions: [...state.transactions, newItem]};
            
        case UPDATE_TRANSACTION_ITEM:
            // const {id} = action.payload
            return state;

        case DELETE_TRANSACTION_ITEM:
            const newTransactionAfterDelete = state.transactions.map(transaction => transaction.id !== action.payload.id)
            return {
                transactions: newTransactionAfterDelete
            }

        default:
            return state;
    }
}