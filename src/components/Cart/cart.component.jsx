import React, { useContext } from 'react';
import './cart.style.scss';
import './cart-respnsive.style.scss';
import HOC from '../../HOC/HOC';
import Breadcrumb from '../../page/Breadcrumb/breadcrumb.page';
import { Link, useHistory } from 'react-router-dom';
import CartItem from '../CartItem/cartItem.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CartNull from '../CartNull/cart-null.compnent';
import {  formatPrice } from '../../utils/helpers';
import StripeCheckout from 'react-stripe-checkout';
import { UserContext } from '../../context/user.context';


const Cart = ({ cartItems, total }) => {
    const { user } = useContext(UserContext);
    const history = useHistory();

    const handleALert = (user) => {
        if(!user.token) {
            alert('Bạn cần đăng nhập để thanh toán');
            history.push('/login');
        }
    }
    return (
        <div className='group-cart'>
            <Breadcrumb breadcrumb='Giỏ hàng'/>
            <div className='container'>
                <h2>Giỏ hàng</h2>
                {
                    !cartItems.length ? (
                        <CartNull/>
                    ) : (
                        <>
                        <div className='cart'>
                            <div className='cart-header'>
                                <div className='cart-header__item' style={{ width: '18%' }}>Hình ảnh</div>
                                <div className='cart-header__item' style={{ width: '32%' }}>Tên sản phẩm</div>
                                <div className='cart-header__item' style={{ width: '14%' }}>Số lượng</div>
                                <div className='cart-header__item' style={{ width: '14%' }}>Tổng tiền</div>
                                <div className='cart-header__item' style={{ width: '22%' }}>Xóa</div>
                            </div>

                            <div className='cart-body'>
                                {
                                    cartItems.map(item => {
                                        return <CartItem item={item}/>
                                    })
                                }

                            </div>
                        </div>
                        <div className='group-checkout'>
                            <Link to='/products' className='back-home'>Tiếp tục mua hàng</Link>
                            <div className='group-checkout__total'>
                                <div className='group-checkout__total--alert'>
                                    <div className='left'>Tổng giá:</div>
                                    <div className='right'>{formatPrice(total)}</div>
                                </div>
                            </div>
                        </div>

                        {
                            user.token ? (
                                <div className='group-button-paypal'>
                                    <StripeCheckout price={total}/>
                                </div>
                            ) : (
                                <div className='group-button-cart'>
                                    <button onClick={handleALert}>Thanh toán</button>
                                </div>
                            )
                        }
                        </>
                    )
                }
            
            </div>
        </div>
    );
};

const CartPage = HOC(Cart)

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
})

export default connect(mapStateToProps)(CartPage);