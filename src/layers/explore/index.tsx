import React, { FC } from 'react';
import { Button, Slider } from '../../components';
import './index.scss';
import { exploreData } from './statics';

const Explore: FC<{}> = () => {
    return (
        <div className="Explore">
            <div className="custom-container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="Explore__content">
                            <h2>50+ Beautiful rooms inspiration</h2>
                            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                            <Button inline={true} size="md" type="primary">Explore More</Button>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Slider type="explore" items={exploreData} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Explore;
