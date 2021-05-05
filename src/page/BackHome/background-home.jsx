import React from 'react';
import './background-home.style.scss';
import './background-home-responsive.style.scss'
import slide from '../../assets/slider_1.jpg'

function BackgroundHome() {
    return (
        <div className='background-home'>
            <div className='background-res'>
                <img src={slide} alt=""/>
            </div>
        </div>
    );
}

export default BackgroundHome;