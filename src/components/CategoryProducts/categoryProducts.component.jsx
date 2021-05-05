import React from 'react';
import './categoryProducts.style.scss';
import HOC from '../../HOC/HOC';
import Filter from '../Filter/filter.component';
import ProductList from '../ProductList/product-list.component';
import Breadcrumb from '../../page/Breadcrumb/breadcrumb.page';
import { useProductsContext } from '../../context/products.context';
import { useParams } from 'react-router';

const CategoryProducts = () => {
    const { id } = useParams();
    const { products } = useProductsContext();

    const productsCategory = products.filter(item => parseInt(item.category_id) === parseInt(id));

    return (
        <div className='products'>
            <Breadcrumb/>
            <div className='container'>
                <div className='row'>
                    <Filter/>
                    <ProductList products={productsCategory}/>
                </div>
            </div>
        </div>
    );
};

const CategoryProductPage = HOC(CategoryProducts);

export default CategoryProductPage;