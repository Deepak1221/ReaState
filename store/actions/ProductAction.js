export const TOGGLE_SAVED = 'TOGGLE_SAVED'
 

export const toggleSave = (id) => {
    return { type: TOGGLE_SAVED, id: id }
}
 