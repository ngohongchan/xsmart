import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import reducer from '../reducer/filter_reducer';
import {
    LOAD_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    SHOW_SIDEBAR_FILTER,
    CLOSE_SIDEBAR_FILTER
} from '../actions/actions';

import { useProductsContext } from './products.context';
import { useBrandContext } from './brand.context';

export const FilterContext = createContext();


const initialState = {
    all_products: [],
    products: [],
    brands: [],
    filters: {
      searchText: '',
      brandFilter: 'all',
      price: 'all',
      categoryFilter: 'all',
    },
    isSideBarFilter: false
  }
  

export const FilterProvider = ({ children }) => {
    const { products } =  useProductsContext();
    const { brand } = useBrandContext();
    const location = useLocation();
    

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS });
    }, [products, state.filters]);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: { products, brand } });
    }, [products]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        dispatch({
            type: UPDATE_FILTERS,
            payload: { name: 'searchText', value: searchParams.get('s') }
        });

    }, [])


    const updateFilter = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === 'brandFilter'){
            value = e.target.value;
        }

        if(name === 'categoryFilter'){
            value = e.target.value;
        }

        if(name === 'price'){
            value = e.target.value;
        }

        if(name === 'searchText'){
            value = e.target.value;
        }

        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });

    }

    const ScrollFilter = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        ScrollFilter();
    });

    const showSidebarFilter = () => {
        dispatch({ type: SHOW_SIDEBAR_FILTER });
    }

    const closeSidbarFilter = () => {
        dispatch({ type: CLOSE_SIDEBAR_FILTER });
    }

    return (
       <FilterContext.Provider value={{ ...state, updateFilter, ScrollFilter, showSidebarFilter, closeSidbarFilter }}>
           { children }
       </FilterContext.Provider> 
    )
}


export const useFilterContext = () => {
    return useContext(FilterContext);
}