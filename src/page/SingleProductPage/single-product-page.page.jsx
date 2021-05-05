import React, { useEffect } from 'react';
import './single-product-page.style.scss';
import './single-product-page-responsive.style.scss';
import HOC from '../../HOC/HOC';
import Breadcrumb from '../Breadcrumb/breadcrumb.page';
import Gallery from '../../components/Gallery/gallery.components';
import Services from '../Services/services.page';
import bag from '../../assets/bag.png';
import { useParams } from 'react-router';
import { useProductsContext } from '../../context/products.context';
import { useBrandContext } from '../../context/brand.context';
import { formatPrice } from '../../utils/helpers';
import {  addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';


const ProductSinglePage = ({ addItem }) => {
    const { id } = useParams();
    const { products, showCartModal, handleShowCartModal } = useProductsContext();
    const { brand } = useBrandContext();
    
    const productsDetail = products.find(product => parseInt(product.id) === parseInt(id))

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
    }, [id]);

    if(!productsDetail) {
        return <h1>Loading</h1>
    }

    const brandDetail = brand.find(bra => parseInt(bra.id) === parseInt(productsDetail.brand_id));


    return (
        <div className='product-detail-group'>
            <Breadcrumb breadcrumb={productsDetail.name}/>
            <div className='container'>
                <div className='group-gallery'>
                   <Gallery images={productsDetail.image}/>
                    <div className='group-gallery__info'>
                        <h2 className='group-gallery__info--name'>{productsDetail.name}</h2>
                            <div className='group-gallery__info--brand'>
                                <span className='text_infor'>| <span className='brand_dark'>Thương hiệu:</span> {brandDetail.brand_name}</span>
                                <span>| <span className='brand_dark'>Bảo hành:</span> 12 tháng tháng</span>
                            </div>
                            <h2 className='group-gallery__info--price'>{formatPrice(productsDetail.price)}</h2>
                            <div className='des_single_item'>
                                <p><span>Kích thước màn hình:</span> {productsDetail.screen_size}</p>
                                <p><span>Độ phân giải màn hình:</span> {productsDetail.screen_resolution}</p>
                                <p><span>Luôn hiển thị:</span> {productsDetail.always_display}</p>
                                <p><span>Mật độ điểm ảnh:</span>  {productsDetail.pixel_density}</p>
                                <p><span>Multi-touch:</span> {productsDetail.multi_touch}</p>
                                <p><span>Loại màn hình:</span> {productsDetail.screen_type}</p>
                            </div>
                            <div className='group-button'>
                                <button className='btn btn-danger'  onClick={() => { addItem(productsDetail); showCartModal(); handleShowCartModal(productsDetail.id); }}>
                                    <img src={bag}/>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            <Services/>
            <div className='tab_content_detail'>
                <div className='container'>
                    <h1 className='product_info'>Thông tin sản phẩm</h1>
                    <div className='des_single_item'>
                    <p><span>Kích thước màn hình:</span> {productsDetail.screen_size}</p>
                                <p><span>Độ phân giải màn hình:</span> {productsDetail.screen_resolution}</p>
                                <p><span>Luôn hiển thị:</span> {productsDetail.always_display}</p>
                                <p><span>Mật độ điểm ảnh:</span>  {productsDetail.pixel_density}</p>
                                <p><span>Multi-touch:</span> {productsDetail.multi_touch}</p>
                                <p><span>Loại màn hình:</span> {productsDetail.screen_type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
       addItem: (item) => dispatch(addItem(item))
    }
}

const ProductSingleComponent = HOC(connect(null, mapDispatchToProps)(ProductSinglePage));

export default ProductSingleComponent;