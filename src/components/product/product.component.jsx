import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products.context';
import { formatPrice } from '../../utils/helpers';

const Product = ({ products }) => {

    const {  handleShowDataModal, showModal } = useProductsContext();
    
    return (
       <React.Fragment>
           {
               products.map(product => {
                   return (
                    <div className='product' key={product.id}>
                          <Link to={`/product/${product.id}`}>
                            <div className='product__img' >
                                    <img src={product.image[0].url}/>
                            </div>
                        </Link>
                        <div className='product__info'>
                        <p className='product__info--name'>{product.name}</p>
                            <p className='product__info--price'>{formatPrice(product.price)}</p>
                        </div>
                
                        <div className='product__button'>
                        <button onClick={() => { handleShowDataModal(product.id); showModal(); }} className='product__button--btn' type='button'>Xem nhanh</button>
                        </div>
                </div>
                   )
               })
           }
       </React.Fragment>
    )
}


export default Product;