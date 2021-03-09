import PRODUCTS from "../../data/DummyData";
import { TOGGLE_SAVED,API_PRODUCT_LIST } from "../actions/ProductAction";

const initialState ={
    availableProducts : [],
    userProducts : PRODUCTS.filter(prod => prod.ownerId ==='u1')
}

export default (state= initialState , action  )=>{
    switch (action.type) {
        case TOGGLE_SAVED:
            const pList = [...state.availableProducts]
            const item = state.availableProducts.find(mItem => mItem.id === action.id)
            item.isfav = !item.isfav
         //   pList.update(item)
           // const existingIndex = state.savedItems.findIndex(mItem => mItem.id === item.id)
            return { ...state, availableProducts: pList }

            break;

            case API_PRODUCT_LIST:
                const prodList = action.payload
                return { ...state, availableProducts: prodList }
                break;
    
        default:
            break;
    }
    return state;
}