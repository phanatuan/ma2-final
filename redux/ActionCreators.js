import { INCREMENT_DATE, DECREMENT_DATE, DELETE_TRANSACTION_ITEM } from "./ActionTypes";


let nextTransactionItem = 0; 
export const addTransactionItem = (transactionItem) => ({ 
    type: 'ADD_TRANSACTION_ITEM', 
    payload: {
        id: ++nextTransactionItem,
        item: transactionItem
    }
})


export const incrementDate = (date) => ({ 
    type: INCREMENT_DATE,
    payload: {
        date
    }
})

export const decrementDate = (date) => ({ 
    type: DECREMENT_DATE,
    payload: {date}
})

export const deleteTransactionItem = (id) => ({ 
    type: DELETE_TRANSACTION_ITEM, 
    payload: {id}
})