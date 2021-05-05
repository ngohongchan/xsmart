import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { url } from '../utils/url';


export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState([]);

    const fetchDataCategory = async (url) => {
        const response = await axios.get(`${url}/categories`)
        const categoryData = response.data;
        setCategory(categoryData);
    }

    useEffect(() => {
        fetchDataCategory(url);
    }, [])

    return (
        <CategoryContext.Provider value={{ category }}>
            { children }
        </CategoryContext.Provider>
    )
}

export const useCategoryContext = () => {
    return useContext(CategoryContext);
}