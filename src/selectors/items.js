import { createSelector } from 'reselect';

const itemSelector = state => state.itemsList

export const getItemsList = createSelector(
    itemSelector,
    itemsList => itemsList
)