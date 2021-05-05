import React from 'react';
import './product-sale-page.style.scss';
import ProductSaleList from '../../components/ProductSaleList/product-sale-list.component';

const ProductSalePage = () => {
    return (
        <div className='product-page'>
            <ProductSaleList/>
        </div>
    )
}

export default ProductSalePage;