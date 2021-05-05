import React from 'react';
import './product-top-sale.compnent.style.scss';
import './product-top-sale.compnent-responsive.style.scss';
import { useProductsContext } from '../../context/products.context';
import { useBrandContext } from '../../context/brand.context';
import { Link } from 'react-router-dom';

const ProductTopSale = () => {
    const {products_loading: loading, products_Topsale } = useProductsContext();
    const products_top = products_Topsale;
    const { brand } = useBrandContext();

    if(loading) {
        return null;
    }

    if(!products_top) {
        return null;
    }

       
    const brandProduct = brand.find(bra => parseInt(bra.id) === parseInt(products_top.brand_id));

    if(!brandProduct){
        return null;
    }

    return (
        <div className='group_topsale'>
            <div className='container'>
                 <div className='row'>
                    <div className='col-6'>
                        <div className='col-6__img'>
                            <img src={products_top.image[0].url} alt='topsale'/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h1 className='col-6__title'>TOP BÁN CHẠY</h1>
                        <h2 className='col-6__name'><Link to={`/product/${products_top.id}`} className='col-6__name--link' href="#">{products_top.name }</Link></h2>
                        <div className='col-6__brand'>
                            <span className='col-6__brand--text'>| <span className='brand_dark'>Thương hiệu:</span> {brandProduct.brand_name}</span>
                            <span>| <span className='brand_dark'>Bảo hành:</span> 12 tháng tháng</span>
                        </div>
                        <h2 className='col-6__price'>{products_top.price}₫</h2>
                        <div className='des_single_item'>
                            <p><span>Kích thước màn hình:</span> {products_top.screen_size}</p>
                            <p><span>Độ phân giải màn hình:</span> {products_top.screen_resolution}</p>
                            <p><span>Luôn hiển thị:</span> {products_top.always_display}</p>
                            <p><span>Mật độ điểm ảnh:</span> {products_top.pixel_density}</p>
                            <p><span>Multi-touch:</span> {products_top.multi_touch}</p>
                            <p><span>Loại màn hình:</span>  {products_top.screen_type}</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
} 

export default ProductTopSale;