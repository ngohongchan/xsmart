import {
    LOAD_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    SHOW_SIDEBAR_FILTER,
    CLOSE_SIDEBAR_FILTER
  } from '../actions/actions';

const filter_reducer = (state, action) => {

    if(action.type === SHOW_SIDEBAR_FILTER) {
        return {
            ...state,
            isSideBarFilter: true
        }
    }

    if(action.type === CLOSE_SIDEBAR_FILTER) {
        return {
            ...state,
            isSideBarFilter: false
        }
    }

    if(action.type === LOAD_PRODUCTS){
        const { products } = action.payload;
        return {
            ...state,
            all_products: [...products],
            filters: {
                ...state.filters
            }
        }
    }

    if(action.type === UPDATE_FILTERS) {
        const { name, value } = action.payload;
        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            }
        }
    }

    if(action.type === FILTER_PRODUCTS){
        const { all_products } = state;
        const { searchText, brandFilter, price, categoryFilter } = state.filters;
    
        let tempProducts = [...all_products];     
    
        //Filter Brand
        if(brandFilter !== 'all') {
            tempProducts = tempProducts.filter((item) => {
               if(parseInt(brandFilter) === parseInt(item.brand_id)){
                return parseInt(item.brand_id) === parseInt(brandFilter);
               }
            })
        }
       
        //Filter Category
        if(categoryFilter !== 'all') {
            tempProducts = tempProducts.filter((item) => {
                if(parseInt(categoryFilter) === parseInt(item.category_id)){
                    return parseInt(item.category_id) === parseInt(categoryFilter); 
                }
            })
        }

        //Filter Price 
        if(price !== 'all'){
            tempProducts = tempProducts.filter((item) => {
                if(parseInt(price) === 3000000){
                    return item.price < 3000000;
                } else if(parseInt(price) === 3500000) {
                    return item.price > 3500000 || item.price >= 6000000;
                } else {
                    return item.price > 6000000;
                }
            })
        }

        //SearchText
        if(searchText) {
            tempProducts = tempProducts.filter((product) => {
                return product.name.toLowerCase().startsWith(searchText.toLowerCase());
            });
        }
    
        return {
            ...state,
            products: tempProducts,
        }
    }

    return state;
    
    throw new Error(`No Matching "${action.type}" - action type`);
}


export default filter_reducer;