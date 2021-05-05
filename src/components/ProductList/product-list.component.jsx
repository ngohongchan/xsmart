import React from 'react';
import Product from '../product/product.component';
import './product-list.style.scss';
import './product-list-responsive.style.scss';

const ProductList = ({ products }) => {

    return (
        <div className='group-product-list'>
            <h2>Tất cả sản phẩm</h2>
                <div className='productlist'>
                 <Product products={products}/>                    
                </div>
            </div>
    );
};

export default ProductList;