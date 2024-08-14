// reducers.js
import {
    ADD_TRANSACTION,
    SET_SELECTED_MONTH,
    SET_SELECTED_FILTER,
    SET_SELECTED_HOME_FILTER,
    UPDATE_USERNAME,
} from './actions';

const initialState = {
    transactions: [
        {
            id: 1,
            category: 'Shopping',
            description: 'Buy some grocery',
            type: 'Expense',
            amount: '- 5120',
            month: 'November',
            time: '10:00 AM',
            date: '2024-11-12'
        },
        {
            id: 2,
            category: 'Food',
            description: 'Arabian Hut',
            type: 'Expense',
            amount: '- 532',
            month: 'May',
            time: '07:30 PM',
            date: '2024-05-12'
        },
        {
            id: 3,
            category: 'Salary',
            description: 'Salary for august',
            type: 'Income',
            amount: '+ 5000',
            month: 'July',
            time: '03:30 PM',
            date: '2024-07-12'
        },
        {
            id: 4,
            category: 'Subsription',
            description: 'Disney + Annual',
            type: 'Expense',
            amount: '- 1180',
            month: 'September',
            time: '10:00 PM',
            date: '2024-09-12'
        },
        {
            id: 5,
            category: 'Fuel',
            description: 'kozhikode',
            type: 'Expense',
            amount: '- 1000',
            month: 'May',
            time: '07:30 PM',
            date: '2024-05-12'
        },
        {
            id: 6,
            category: 'Cinema',
            description: 'lulu mall',
            type: 'Expense',
            amount: '- 507',
            month: 'October',
            time: '02:45 PM',
            date: '2024-10-12'
        },
        {
            id: 7,
            category: 'Loan',
            description: 'Car loan',
            type: 'Expense',
            amount: '- 4700',
            month: 'January',
            time: '11:20 AM',
            date: '2024-01-12'
        },
        {
            id: 8,
            category: 'Food',
            description: 'Food loan',
            type: 'Income',
            amount: '+ 400',
            month: 'January',
            time: '11:20 AM',
            date: '2024-01-12'
        },
    ],
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
