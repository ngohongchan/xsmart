import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const Gallery = ({ images = [{ url: '' }] }) => {
    const [main, setMain] = useState(images[0]);
    // console.log(images[0]);
    const imageProps = {
        smallImage: {
          alt: 'Phasellus laoreet',
          isFluidWidth: true,
          src: main.url,
          className: 'mainImg'
        },
        largeImage: {
          src: main.url,
          width: 800,
          height: 800,
          className: 'borderBox',
        },
        enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
      };
    return (
        <div className='group-gallery__gallery'>
        <div className='gallery_list'>
            {
                images.map((image, index) => {
                    return (
                        <div key={index} className={`${image.url === main.url ? 'gallery_list__item active' : 'gallery_list__item'}`} onClick={() => setMain(images[index])}>
                            <img src={image.url} alt="product item"/>
                        </div>
                    )
                })
            }
        </div>
        <div className='group-gallery__gallery--main'>
        <ReactImageMagnify {...imageProps} />
            {/* <img className='mainImg' src={main.url} alt=""/> */}
        </div>

    </div>
    )
} 

export default Gallery;