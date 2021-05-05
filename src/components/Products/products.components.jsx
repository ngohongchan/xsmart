import React from 'react';
import './products.style.scss';
import HOC from '../../HOC/HOC';
import Filter from '../Filter/filter.component';
import ProductList from '../ProductList/product-list.component';
import Breadcrumb from '../../page/Breadcrumb/breadcrumb.page';
// import { useProductsContext } from '../../context/products.context';
import { useFilterContext } from '../../context/filter.context';
import { useBrandContext } from '../../context/brand.context';
import Loading from '../Loading/loading.component';
import ButtonOpenSideBar from '../Button-filter-responsive/button.component';
import FilterResponsive from '../Filter-responsive/Filter-responsive';

const Products = () => {
    // const { products } = useProductsContext();
    const { products } = useFilterContext();
    const { brand } = useBrandContext();
    
    return (
        <React.Fragment>
            {
                !products.length && !brand.length ? (
                    <Loading/>
                ) : (
                    <div className='products'>
                    <Breadcrumb breadcrumb='Tất cả sản phẩm'/>
                    <div className='container'>
                        <div className='row'>
                            <Filter/>
                            <ProductList products={products}/>
                            <ButtonOpenSideBar/>
                            <FilterResponsive/>
                        </div>
                    </div>
                </div>
                )
            }
        </React.Fragment>
    );
};

const ProductsPage = HOC(Products);

export default ProductsPage;