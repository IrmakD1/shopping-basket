export const ADD_ERROR = 'ADD_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'


export const addError = () => ({
    type: ADD_ERROR
}) 

export const clearError = () => ({
    type: CLEAR_ERROR
})

export const handleAddError = () => (dispatch) => {
    dispatch(addError())
} 

export const handleClearError = () => (dispatch) => {
    dispatch(clearError())
} 