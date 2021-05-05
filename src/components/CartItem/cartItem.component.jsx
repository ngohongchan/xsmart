import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';
import { formatPrice } from '../../utils/helpers';

const CartItem = ({ item, addItem, removeItem, clearItem }) => {
    const {  name, image, quantity, price } = item;

    return (
        <React.Fragment>
                        <div className='cart-body__item'>
                            <div className='cart-body__item--image list' style={{ width: '18%', textAlign: 'center'}}> 
                                <img src={image[0].url} alt=""/>
                            </div>
                            <div className='cart-body__item--title list' style={{ width: '32%', textAlign: 'center' }}>
                                {name}
                            </div>
                            <div className='cart-body__item--quantity list' style={{ width: '14%', alignItems: 'center' }}>
                                <div className='group_cart'>
                                            <div className='group_cart__quantity'>
                                            <div className='group_cart__custom'>
                                            <button onClick={() => removeItem(item)} className='btn incresea'><i className="fa fa-caret-down" aria-hidden="true"></i></button>
                                            <span className='quantity'>{quantity}</span>
                                            <button onClick={() => addItem(item)} className='btn decresea'><i className="fa fa-caret-up" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className='cart-body__item--total list' style={{ width: '14%', textAlign: 'center' }}>{formatPrice(price)}</div>
                            <div className='cart-body__item--delete list' style={{ width: '22%', textAlign: 'center' }}><i onClick={() => clearItem(item)} className="fa fa-trash-o" aria-hidden="true"></i></div>
                        </div>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      addItem: item =>  dispatch(addItem(item)), 
      removeItem: item => dispatch(removeItem(item)),
      clearItem: item => dispatch(clearItemFromCart(item))
    }
  }

export default connect(null, mapDispatchToProps)(CartItem);