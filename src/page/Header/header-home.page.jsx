import React, { useContext, useState } from 'react';
import './header.style.scss';
import './header-responsive.style.scss';
import userInfor from '../../assets/user-image-with-black-background.png';
import menubar from '../../assets/i_menubar_dark.png';
import { Link } from 'react-router-dom';
import userLog from '../../assets/user_log.png';
import bag from '../../assets/bag.png';
import search from '../../assets/search_icon.png';
import Menu from '../../components/Menu/menu.component';
import { useFilterContext } from '../../context/filter.context';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { UserContext } from '../../context/user.context';

const HeaderHomePage = ({ filter, color, logo, colorItem, colorText, itemCount }) => {

    const { user,  userLogout } = useContext(UserContext);

    const [isToggleAccount, setIsToggleAccount] = useState(false);
    const [isToggleSearch, setIsToggleSearch] = useState(false);
    const [isToggleSideBar, setIsToggleSideBar] = useState(false);

    const { filters: { searchText }, updateFilter } = useFilterContext();
    // console.log({searchText});

    const handleSubmit = (e) => {
        e.preventDefault();

        window.location.href = `${window.location.origin}/products?s=${searchText}`;
    }

    return (
        <>
        <div className='header'>
            <div className='container'>
                <div className='header_main'>
                   <span className='header_main__menubar'>
                       <img style={{ filter: filter }} src={menubar} alt="menubar" onClick={() => setIsToggleSideBar(!isToggleSideBar)}/>
                        <span style={{ color: color  }} className='header_main__menubar--title'>Danh mục</span>
                   </span>
                  <span className='header_main__logo'>
                      <Link to='/'><img src={`../../assets/${logo}`} alt="logo xmart"/></Link>
                  </span>
                  <span className='header_main__cartgroup'>
                    <span className='header_main__cartgroup--account' onClick={() => setIsToggleAccount(!isToggleAccount)}>
                        <img className='img_log' src={userLog} alt='user image'/>
                        <span  style={{ color: color  }} className='title_log'>Tài khoản <i className="fa fa-chevron-down" aria-hidden="true"></i> </span>
                        <span className={`${isToggleAccount ? 'account_log' : 'account_log hide-account'}`}>
                            {
                                user.token ? (<div className='user-infor-content'>
                                    <div className='user-infor'>
                                        <img src={userInfor} alt=""/>
                                        <span className='user-name'>{user.username}</span>
                                    </div>
                                    <span onClick={userLogout} className='logout' style={{ textAlign: 'center' }}>Logout</span>
                            </div>) : (
                                <>
                                     <Link to='/login' className='account_log__btn primary' >Đăng nhập</Link>
                                     <Link to='/register' className='account_log__btn default' >Đăng ký</Link>
                                </>
                            )
                            }

                        </span>
                    </span>
                    <span className='header_main__cartgroup--cart'>
                    <Link to='/cart' style={{ cursor:'pointer' }}><img  style={{ filter: filter  }} src={bag} alt='bag'/></Link>
                    <span className='count-item' style={{ color: colorText, background: colorItem }}>{itemCount}</span>
                    </span>
                    <span className='header_main__cartgroup--search'>
                        <img  style={{ filter: filter  }} src={search} alt='search'onClick={() => setIsToggleSearch(!isToggleSearch)}/>
                        <span className={`${isToggleSearch ? 'search_group' : 'search_group hide-search'}`}>
                            <form className='search_group__form' onSubmit={handleSubmit}>
                                <input onChange={updateFilter} value={searchText} className='search_group__form--searchInput' type="text" name='searchText' placeholder='Tìm kiếm'/>
                                <button className='search_group__form--searchBtn' type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                        </span>
                    </span>
                  </span>
                </div>
            </div>
        </div>
        <Menu isToggleSideBar={isToggleSideBar} setIsToggleSideBar={setIsToggleSideBar}/>
    </>
    );
};

const mapStateToProps = (state) => {
    return {
       itemCount: selectCartItemCount(state)
    }
}

export default connect(mapStateToProps)(HeaderHomePage);