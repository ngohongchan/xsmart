import React from 'react';
import './loading.style.scss'
import Lottie from 'react-lottie';
import * as animationData from '../../utils/48430-happy-valentines-day.json';

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
            <div className='loading'>
                <Lottie options={defaultOptions} height={350} width={350}/>
            </div>

    );
};

export default Loading;