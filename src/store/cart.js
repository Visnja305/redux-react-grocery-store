const ADD_TO_CART = "cart/addToCart";

export const addToCart = (itemId) => ({
    type: ADD_TO_CART,
    itemId,
});


export default function cartReducer(state={},action){
switch(action.type){
    case ADD_TO_CART:{
        const {itemId}=action;
        return {
            ...state,
            [itemId]:{id:itemId, count:1},
        }
    }
default:
    return state;
}
}
