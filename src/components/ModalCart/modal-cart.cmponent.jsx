import React from 'react';
import './modal-cart.style.scss';
import './modal-respnsive.style.scss';
import { useProductsContext } from '../../context/products.context';
import { Link } from 'react-router-dom';
import {  selectCartItemCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { formatPrice } from '../../utils/helpers';

const ModalCart = ({ itemCount }) => {
    const { isModalCart, closeCartModal, showModalCart } = useProductsContext();
    return (
        <React.Fragment>
            {
                isModalCart ? (
                    <div className='modal-cart-group'>
                        <div className='overlay-cart'></div>
                        <div className='cart-content'>
                        <div className='cart-box-modal'>
                            <div className='cart-box-modal__header'>
                                <div>
                                    <i className="fa fa-check" aria-hidden="true"></i>
                                    <span className='title-modal'>Sản phẩm vừa được thêm vào giỏ hàng</span>
                                </div>
                                <i onClick={closeCartModal} style={{ cursor: 'pointer' }} className="fa fa-times" aria-hidden="true"></i>
                            </div>
                            <div className='cart-box-modal__body'>
                                <div className='cart-box-modal__body--image'>
                                    <img src={showModalCart.image[0].url} alt=""/>
                                </div>
                                <div className='cart-box-modal__body--info'>
                                    <p>{showModalCart.name}</p>
                                    <p className='modal-price'>{formatPrice(showModalCart.price)}</p>
                                </div>
                            </div>
                            <div className='cart-box-modal__content'>
                                <p className='cart-box-modal__content--text'><i className="fa fa-caret-right" aria-hidden="true"></i> Giỏ hàng của bạn hiện có ({itemCount}) sản phẩm</p>
                                <Link to='/cart' onClick={closeCartModal} className='cart-box-modal__content--button'>Vào giỏ hàng nhanh<i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        </div>
                </div>
                ) : null
            }
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemCount(state)
    }
}

export default connect(mapStateToProps)(ModalCart);