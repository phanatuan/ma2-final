import {ADD_TRANSACTION_ITEM, UPDATE_TRANSACTION_ITEM, DELETE_TRANSACTION_ITEM} from './ActionTypes';
import moment from 'moment';

const initialState = {
    transactions: [
        {
                id: 0,
                amount: '10000',
                description: 'Buy A Book',
                currency: 'VND',
                category: 'Food',
                date: moment(new Date()).format('ddd, DD MMM')
        },
    ]
}

export const transactions = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TRANSACTION_ITEM:
            let {id, item} = action.payload
            let newItem = {id: id, ...item}
            return {
                ...state, 
                transactions: [
                    ...state.transactions,
                    newItem
                ]}
            
        // case UPDATE_TRANSACTION_ITEM:

        //     // let updatedItem = { id: updateId, ...update }
            
        //     return state.transactions.map((item) => {
        //         if (item.id === action.payload.id) { 
        //             return {
        //                 // ...item,
        //                 // amount: action.payload.update.amount,
        //                 // description: action.payload.update.description,
        //                 // category: action.payload.update.category,
        //                 // date: action.payload.update.date.toString()
        //                 ...action.payload.item
        //             }
        //         }
        //         return item;
        //     })
            

        case DELETE_TRANSACTION_ITEM:
            let newTransactionAfterDelete = state.transactions.map(transaction => transaction.id !== action.payload.id)
            return {
                transactions: newTransactionAfterDelete
            }

        default:
            return state;
    }
}