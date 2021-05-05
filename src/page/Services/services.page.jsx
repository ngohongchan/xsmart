import React from 'react';
import './services.style.scss';
import './services-responsive.style.scss';
import service1 from '../../assets/service_1.png';
import service2 from '../../assets/service_2.png';
import service3 from '../../assets/service_3.png';
import service4 from '../../assets/service_4.png';

const Services = () => {
    return (
        <div className='services'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={service1} alt="sercice"/>
                        <span>Sản phẩm chính hãng</span>
                    </div>
                    <div className='col-3'>
                        <img src={service2} alt="sercice"/>
                        <span>Giao hàng tận nơi</span>
                    </div>
                    <div className='col-3'>
                        <img src={service3} alt="sercice"/>
                        <span>Thanh toán tại nhà</span>
                    </div>
                    <div className='col-3'>
                        <img src={service4} alt="sercice"/>
                        <span>bảo hành chính hảng</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services;