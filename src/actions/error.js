export const ADD_ERROR = 'ADD_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'


export const addError = (text) => ({
    type: ADD_ERROR,
    text
}) 

export const clearError = () => ({
    type: CLEAR_ERROR
})

export const handleAddError = (text) => (dispatch) => {
    dispatch(addError(text))
} 

export const handleClearError = () => (dispatch) => {
    dispatch(clearError())
} 