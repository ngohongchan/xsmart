import {  CartActionsTypes } from './cart.types';


export const addItem = (item) => ({
    type: CartActionsTypes.ADD_ITEM,
    payload: item
});


export const removeItem = (item) => ({
    type: CartActionsTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = (item) => ({
    type: CartActionsTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})



// export const addItem = (item) => ({
//     type: CartActionsTypes.ADD_ITEM,
//     payload: item
// });

// export const removeItem = (item) => ({
//     type: CartActionsTypes.REMOVE_ITEM,
//     payload: item
// });

// export const clearItemFromCart = (item) => ({
//     type: CartActionsTypes.CLEAR_ITEM_FROM_CART,
//     payload: item
// })