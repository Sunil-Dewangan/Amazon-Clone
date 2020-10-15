export const intialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "set_user":
            return{
                ...state,
                user: action.user,
            }
        case "Add_to_Basket" :
        /*logic for add items to basket*/
            return {                
                ...state,
                basket: [...state.basket, action.item],               
            };
           
        case "Remove_from_Basket" :
        /*logic for removing items from basket*/
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index>=0) {
                //item exist in basket, remove it
                newBasket.splice(index, 1);
                
            } else {
                console.warn(
                    'cannot remove product (id: ${action.id}) as it is not in basket'
                )
            }
        
            return {
                ...state,
                basket: newBasket,
            };
            
        default:
            return state;
    }
}

export default reducer;