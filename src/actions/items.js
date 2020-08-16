export const ADD_ITEMS = 'ADD_ITEMS'

export const addItems = items => ({
     type: ADD_ITEMS,
     items
})

export const loadInitialData = (data) => async (dispatch) => {
    dispatch(addItems(data))
}