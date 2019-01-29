import { ADD_TRANSACTION_ITEM, UPDATE_TRANSACTION_ITEM, DELETE_TRANSACTION_ITEM } from './ActionTypes';
import moment from 'moment';

const initialState = {
    transactions: [
        {
            id: 0,
            amount: 10000,
            description: 'Buy A Book',
            currency: 'VND',
            category: 'Food',
            date: moment(new Date()).format('DD MMM')
        },
    ],
    categories: ['Food', 'Accomodation', 'Transport', 'Miscellaneous', 'Education']
}

export const transactions = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TRANSACTION_ITEM:
            const { id, item } = action.payload
            const newItem = { id: id, ...item }
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    newItem
                ]
            }

        case UPDATE_TRANSACTION_ITEM:

            return {
                ...state,
                transactions: state.transactions.map((item) => {
                    if (item.id === action.payload.itemId) {
                        return {
                            ...item,
                            ...action.payload.item
                        }
                    }
                    return item;
                })
            }

        case DELETE_TRANSACTION_ITEM:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload.id)
            }

        default:
            return state;
    }
}