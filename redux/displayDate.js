import * as ActionType from './ActionTypes';
import moment from 'moment';

const initialState = { 
    displayDate: moment(new Date()).format('ddd, DD MMM')
}

export const displayDate = (state = initialState, action = {} ) => { 
    switch (action.type) { 
        case ActionType.INCREMENT_DATE: 
            return {displayDate: action.payload.date}

        case ActionType.DECREMENT_DATE:
            return {displayDate: action.payload.date}
            
        default: 
            return state;
    }
}