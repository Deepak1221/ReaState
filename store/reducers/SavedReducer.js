import PRODUCTS from "../../data/DummyData";
import { ADD_TO_SAVE, REMOVE_FROM_SAVE } from "../actions/SavedAction";
const initialState = {
    savedItems: [],
    savedCount: 0,
    status : 'error'| 'dwdwd'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_SAVE:
            const item = action.product
            const existingIndex = state.savedItems.findIndex(mItem => mItem.id === item.id)
            if (existingIndex >= 0) {
                const updatedList = [...state.savedItems]
                updatedList.splice(existingIndex, 1);
                return { ...state, savedItems: updatedList, savedCount: updatedList.length }
            }
            else {
                item.isFav = true
                return { ...state, savedItems: state.savedItems.concat(item), savedCount: state.savedCount + 1 }
            }


            break;
        case REMOVE_FROM_SAVE:

            break;

        default:
            break;
    }
    return state;
}