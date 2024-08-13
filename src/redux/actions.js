export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const SET_SELECTED_MONTH = 'SET_SELECTED_MONTH';
export const SET_SELECTED_FILTER = 'SET_SELECTED_FILTER';
export const SET_SELECTED_HOME_FILTER = 'SET_SELECTED_HOME_FILTER';

export const addTransaction = (transaction) => ({
    type: ADD_TRANSACTION,
    payload: transaction,
});

export const setSelectedMonth = (month) => ({
    type: SET_SELECTED_MONTH,
    payload: month,
});

export const setSelectedFilter = (filter) => ({
    type: SET_SELECTED_FILTER,
    payload: filter,
});

export const setSelectedHomeFilter = (homeFilter) => ({
    type: SET_SELECTED_HOME_FILTER,
    payload: homeFilter,
});