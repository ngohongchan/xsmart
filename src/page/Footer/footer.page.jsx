import React from 'react';
import './footer.style.scss';
import './footer-responsive.style.scss';
import Logo from '../../assets/logo2.png';
import Alert from '../../assets/thongbao.png';
import paymentImg from '../../assets/payment.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={Logo} alt="logo footer"/>
                        <p><span className='text-footer'>Gọi miễn phí</span> <br/> <span>1800 6750</span></p>
                        <p><span className='text-footer'>Địa chỉ</span> <br/> <span>Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn, Hà Nội, Vietnam
                        </span></p>
                        <p><span className='text-footer'>Email</span> <br/> <span>support@sapo.vn</span></p>
                    </div>
                    <div className='col-3'>
                        <h3>Về chúng tôi</h3>
                        <ul className='footer-nav'>
                            <li><Link to='/'>Trang chủ</Link></li>
                            <li><Link to='/products'>Sản phẩm</Link></li>
                            <li><Link to='/'>Tin tức</Link></li>
                            <li><Link to='/'>Giới thiệu</Link></li>
                            <li><Link to='/'>Liên hệ</Link></li> 
                        </ul>
                    </div>
                    <div className='col-3'>
                        <h3>Hỗ trợ khách hàng</h3>
                        <ul className='footer-nav'>
                            <li><Link to='/'>Trang chủ</Link></li>
                            <li><Link to='/products'>Sản phẩm</Link></li>
                            <li><Link to='/'>Tin tức</Link></li>
                            <li><Link to='/'>Giới thiệu</Link></li>
                            <li><Link to='/'>Liên hệ</Link></li> 
                        </ul>
                    </div>
                    <div className='col-3'>
                        <h2>Được chứng nhận</h2>
                        <img src={Alert} alt="alert"/>
                        <h2>Hình thức thanh toán</h2>
                        <img src={paymentImg} alt="payment"/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Footer;