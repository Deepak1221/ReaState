export const TOGGLE_SAVED = 'TOGGLE_SAVED'
export const API_PRODUCT_LIST = 'API_PRODUCT_LIST'

export const toggleSave = (id) => {
    return { type: TOGGLE_SAVED, id: id }
}


 

export const getProductList = () => {
      return async dispatch => {
        const resp = await fetch('https://realstate-692f7-default-rtdb.firebaseio.com/propData.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await resp.json();
        // data.hits.hits.map(item=>{
        //     console.log(item._id);
            
        // })
           dispatch(
            { type: API_PRODUCT_LIST, payload: data.hits.hits }
            )
    }
}

 