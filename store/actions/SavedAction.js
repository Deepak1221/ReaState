export const ADD_TO_SAVE = 'ADD_TO_SAVE'
export const REMOVE_FROM_SAVE = 'REMOVE_FROM_SAVE'

export const addtoSaved = (product) => {
    return { type: ADD_TO_SAVE, product: product }
}

export const removeFromSaved = (id) => {
    return { type: ADD_TO_SAVE, itemId: id }
} 