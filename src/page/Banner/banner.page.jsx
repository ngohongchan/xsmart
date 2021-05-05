import React from 'react';
import './banner.style.scss';
import BannerLogo from '../../assets/banner_3.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='banner_group'>
                    <img src={BannerLogo} alt="banner"/>
                </div>
            </div>
        </div>
    )
}

export default Banner;