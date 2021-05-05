import {  
    GET_PRODUCTS_BEGIN,  
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_ERROR, 
    SHOW_MODAL_PRODUCT, 
    CLOSE_MODAL_PRODUCT, 
    SHOW_DATA_MODAL,
    SHOW_MODAL_CART,
    CLOSE_MODAL_CART,
    SHOW_DATA_MODAL_CART } from '../actions/actions';

const products_reducer = (state, action) => {

    if(action.type === SHOW_MODAL_PRODUCT) {
        return {
            ...state,
            isModal: true
        }
    }

    if(action.type === CLOSE_MODAL_PRODUCT) {
        return {
            ...state,
            isModal: false
        }
    }

    if(action.type === SHOW_MODAL_CART) {
        return {
            ...state,
            isModalCart: true
        }
    }

    if(action.type === CLOSE_MODAL_CART) {
        return {
            ...state,
            isModalCart: false
        }
    }
    
    if(action.type === GET_PRODUCTS_BEGIN){
        return {
            ...state,
            products_loading: true
        }
    }

    if(action.type === GET_PRODUCTS_ERROR){
        return {
            ...state,
            products_error: true
        }
    }

    if(action.type === SHOW_DATA_MODAL){
        const { id } = action.payload;
        const dataModal = state.products.find(item => parseInt(item.id) === parseInt(id)) 
        return {
            ...state,
            showModalData: dataModal
        }
    }

    if(action.type === SHOW_DATA_MODAL_CART) {
        const { id } = action.payload;
        const dataCartModal = state.products.find(item =>  parseInt(item.id) === parseInt(id));

        return {
            ...state,
            showModalCart: dataCartModal
        }
    }

    if(action.type === GET_PRODUCTS_SUCCESS){

        //ProductTopSale
        const productsList = action.payload.map(item => parseInt(item.order));
        const maxOrderProducts = Math.max.apply(Math, productsList);
        const productsTopSale = action.payload.find(item => parseInt(item.order) === maxOrderProducts);

        //ProductHot
        const productHot = action.payload.filter(item => item.product_hot);

        //ProductListsSale
        const productListSsale = action.payload.filter(item => item.product_hot === true).slice(0, 6);

        return {
            ...state,
            products_loading: false,
            products: action.payload,
            products_Topsale: productsTopSale,
            productHot: productHot,
            product_listsale: productListSsale
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}


export default products_reducer;