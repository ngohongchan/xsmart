import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { url } from '../utils/url';


export const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
    const [brand, setBrands] = useState([]);

    const fetchDataBrand = async (url) => {
        const response = await axios.get(`${url}/brands`);
        const brandData = response.data;
        setBrands(brandData);
    }

    useEffect(() => {
        fetchDataBrand(url);
    }, [])

    return (
        <BrandContext.Provider value={{ brand }}>
            { children }
        </BrandContext.Provider>
    )
}

export const useBrandContext = () => {
    return useContext(BrandContext);
}