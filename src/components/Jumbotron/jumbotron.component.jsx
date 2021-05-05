import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import './jumbotron.style.scss';
import './jumbotron-responsive.style.scss';

const Jumbotron = ({ direction, img, productFirst, productSecond }) => {

    if(!productFirst || !productSecond) {
        return null;
    }

    return (
        <div className='product-smart'>
            <div className='container'>
                <div className='row' style={{ flexDirection: direction }}>
                    <div className='col-6'>
                        {/* <img src={`${"../../assets/banner_smw_1.jpg"}`} alt="banner"/> */}
                        <img src={`"../../assets/${img}`} alt="banner"/>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className={`${direction === 'row' ? 'column left' : 'column right'}`}>
                                <div className='column__img' >
                                    <img src={productFirst.image[0].url}/>
                                </div>

                                <div className='column__info'>
                                    <p className='column__info--name'>{productFirst.name}</p>
                                    <p className='column__info--price'>{formatPrice(productFirst.price)}</p>
                                </div>

                                <div className='column__group-button'>
                                <Link to={`/product/${productFirst.id}`} className='column__group-button--btn' type='button'>Xem nhanh</Link>
                                </div>
                            </div>

                            <div className={`${direction === 'row' ? 'column left' : 'column right'}`}>
                                <div className='column__img'>
                                    <img src={productSecond.image[0].url}/>
                                </div>
                                <div className='column__info'>
                                    <p className='column__info--name'>{productSecond.name}</p>
                                    <p className='column__info--price'>{formatPrice(productSecond.price)}</p>
                                </div>

                                <div className='column__group-button'>
                                        <Link to={`/product/${productSecond.id}`} className='column__group-button--btn' type='button'>Xem nhanh</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;