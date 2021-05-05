import React, { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
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

import { url } from '../utils/url';
import reducer from '../reducer/product_reducer';

const initialState = {
    isModal: false,
    isModalCart: false,
    products_loading: false,
    products_error: false,
    products: [],
    products_Topsale: {},
    productHot: {},
    product_listsale: [],
    showModalData: {},
    showModalCart: {}
}

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleShowDataModal = (id) => {
        dispatch({ type: SHOW_DATA_MODAL, payload: { id } })
    }

    const handleShowCartModal = (id) => {
        dispatch({ type: SHOW_DATA_MODAL_CART, payload: { id } });
    }



    const fetchDataProducts = async (url) => {
        dispatch({ type: GET_PRODUCTS_BEGIN })
        try{
            const response = await axios.get(`${url}/products`);
            const products = response.data;
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
        } catch(err) {
            dispatch({ type: GET_PRODUCTS_ERROR });
        }
    }

    const showModal = () => {
        dispatch({ type: SHOW_MODAL_PRODUCT });
    }

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL_PRODUCT });
    }

    const showCartModal = () => {
        dispatch({ type: SHOW_MODAL_CART });
    }

    const closeCartModal = () => {
        dispatch({ type: CLOSE_MODAL_CART });
    }


    useEffect(() => {
        fetchDataProducts(url);
    }, []);
    
    return (
        <ProductContext.Provider value={{ ...state, showModal, closeModal, handleShowDataModal, showCartModal,  closeCartModal,  handleShowCartModal }}>
            { children }
        </ProductContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductContext);
}