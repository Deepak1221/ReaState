import PRODUCTS from "../../data/DummyData";
import { TOGGLE_SAVED } from "../actions/ProductAction";

const initialState ={
    availableProducts : PRODUCTS,
    userProducts : PRODUCTS.filter(prod => prod.ownerId ==='u1')
}

export default (state= initialState , action  )=>{
    switch (action.type) {
        case TOGGLE_SAVED:
            
            break;
    
        default:
            break;
    }
    return state;
}