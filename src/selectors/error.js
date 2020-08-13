import { createSelector } from 'reselect';

const errorSelector = state => state.error

export const getError = createSelector(
    errorSelector,
    error => error.error
)