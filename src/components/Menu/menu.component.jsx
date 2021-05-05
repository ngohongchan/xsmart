import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../../context/category_context';
import './menu.style.scss';

function Menu({ isToggleSideBar, setIsToggleSideBar }) {
    const { category } = useCategoryContext();
    const [isSideBar, setIsSideBar] = useState(false);
 
    return (
        <main>
        <div className={`${isToggleSideBar === false ? 'navigation' : 'navigation show-navigation'}`}></div>
                <div className={`${isToggleSideBar === false ? 'navigation_content' : 'navigation_content show-list-menu'}`}>
                    <span onClick={() => setIsToggleSideBar(false)} className='navigation_content__close'><i className="fa fa-times" aria-hidden="true"></i></span>
                    <ul className='navigation_content__list'>
                        <li><Link to="/">Trang Chủ</Link></li>
                        <li><Link to="/products">Sản phẩm </Link></li>
                        <li className='navigation_content__list--dropdowm'><i  onClick={() => setIsSideBar(!isSideBar)} className="fa fa-chevron-down" aria-hidden="true"></i></li>
                        {
                            isSideBar ? (
                                <ul className='navigation_dropdown'>
                                        {
                                            category.map(cat => {
                                                return (
                                                    <li key={cat.id}><Link to={`/category-products/${cat.id}`}>{cat.category_name}</Link></li>
                                                )
                                            })
                                        }
                                </ul>
                            ) : null
                        }
                        <li><Link to="/">Tin tức</Link></li>
                        <li><Link to="/">Giới thiệu</Link></li>
                        <li><Link to="/">Liên hệ</Link></li>
                        <li className='sigin'><Link className='link' to='/register'>Đăng ký</Link> <Link to='/login'>Đăng nhập</Link></li>
                    </ul>
                </div>
        </main>
    );
}

export default Menu;