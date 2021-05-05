import React from 'react';
import './modal.style.scss';
import Gallery from '../../components/Gallery/gallery.components';
import bag from '../../assets/bag.png';
import { useProductsContext } from '../../context/products.context';
import { formatPrice } from '../../utils/helpers';
import { useBrandContext } from '../../context/brand.context';
import {  addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const Modal = ({ addItem }) => {
    const { showModalData, isModal, closeModal, showCartModal, handleShowCartModal } = useProductsContext();
    const { brand } = useBrandContext();


    if(!showModalData){
        return null;
    }

    const brandData = brand.find(item => parseInt(item.id) === parseInt(showModalData.brand_id))

    return (
        <>
            {
                isModal ? (
                    <div className='group-box'>
                        <div className='modal-box-content'>
                        <div className='overlay' style={{ cursor: 'pointer' }} onClick={() => { closeModal() } }></div>
                        <div className='group-gallery'>
                           <Gallery images={showModalData.image}/>
                            <div className='group-gallery__info'>
                                <h2 className='group-gallery__info--name'>{showModalData.name}</h2>
                                    <div className='group-gallery__info--brand'>
                                        <span className='text_infor'>| <span className='brand_dark'>Thương hiệu:</span> {brandData.brand_name}</span>
                                        <span>| <span className='brand_dark'>Bảo hành:</span> 12 tháng tháng</span>
                                    </div>
                                    <h2 className='group-gallery__info--price'>{formatPrice(showModalData.price)}</h2>
                                    <div className='des_single_item'>
                                        <p><span>Kích thước màn hình:</span> {showModalData.screen_size}</p>
                                        <p><span>Độ phân giải màn hình:</span> {showModalData.screen_resolution}</p>
                                        <p><span>Luôn hiển thị:</span> {showModalData.always_display}</p>
                                        <p><span>Mật độ điểm ảnh:</span>  {showModalData.pixel_density}</p>
                                        <p><span>Multi-touch:</span> {showModalData.multi_touch}</p>
                                        <p><span>Loại màn hình:</span> {showModalData.screen_type}</p>
                                    </div>
        
                                    <div className='group-button'>
                                        <button className='btn btn-danger' onClick={() => { 
                                            addItem(showModalData);
                                            showCartModal();
                                            handleShowCartModal(showModalData.id);
                                            closeModal()
                                            }}>
                                            <img src={bag} alt='img'/>
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
     addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Modal);