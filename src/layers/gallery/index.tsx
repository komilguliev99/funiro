import React, { FC } from 'react';
import './index.scss';
import { gallery } from './statics';

const Gallery: FC<{}> = () => {
    return (
        <div className="Gallery">
            <div className="Gallery__header">
                <p>Share your setup with</p>
                <h2>#FuniroFurniture</h2>
            </div>
            <div className="Gallery__grid">
                {
                    gallery.map((img, idx) => (
                        <div
                            key={idx}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))
                }
            </div>
        </div>
    );
};


export default Gallery;
