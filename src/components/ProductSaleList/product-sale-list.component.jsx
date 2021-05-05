import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products.context';
import { formatPrice } from '../../utils/helpers';
import './product-sale-list.style.scss';
import './product-sale-list-responsive.style.scss';

const ProductSaleList = () => {
    const { product_listsale } = useProductsContext();

    return (
        <div className='product-sale-list'>
            <h2 className='product-sale-list__title'>sản phẩm nổi bật</h2>
            <div className='container'>
                <div className='row-1'>
                  {
                      product_listsale.map(product => {
                          return (
                            <div className='col-4' key={product.id}>
                                <div className='thumbnail'>
                                    <img src={product.image[0].url} alt="product item"/>
                                </div>
                                <div className='col-4__product_info'>
                                    <Link to={`/product/${product.id}`} className='col-4__product_info--name'><p>{product.name}</p></Link>
                                    <p className='col-4__product_info--price'>{formatPrice(product.price)}</p>
                                </div>
                            </div>
                          )
                      })
                  }
        
                </div>
            </div>
        </div>
    )
}

export default ProductSaleList;