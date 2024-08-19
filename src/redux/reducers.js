// reducers.js
import {
    ADD_TRANSACTION,
    SET_SELECTED_MONTH,
    SET_SELECTED_FILTER,
    SET_SELECTED_HOME_FILTER,
    UPDATE_USERNAME,
} from './actions';

const initialState = {
    transactions: [],
    selectedMonth: 'January',
    selectedFilter: 'All',
    selectedHomeFilter: 'Today',
    username: 'Kanupriya',
};

let nextId = initialState.transactions.length + 1;

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    { ...action.payload, id: nextId++ },
                ],
            };
        case SET_SELECTED_MONTH:
            return {
                ...state,
                selectedMonth: action.payload,
            };
        case SET_SELECTED_FILTER:
            return {
                ...state,
                selectedFilter: action.payload,
            };
        case SET_SELECTED_HOME_FILTER:
            return {
                ...state,
                selectedHomeFilter: action.payload,
            };
            case UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    }
};

export default transactionReducer;
