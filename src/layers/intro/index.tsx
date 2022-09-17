import React, { FC } from 'react';
import { Button, Card, Slider } from '../../components';
import './index.scss';
import { defaultItmes } from './statics';

const Intro: FC<{}> = () => {
    return (
        <div className="Intro">
            <div className="Intro__content">
                <Slider type="default" items={defaultItmes} />
                <Card size="lg">
                    <h3 className="Intro__title">High-Quality Furniture Just For You</h3>
                    <p className="Intro__subtitle">Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
                    <Button
                        size="lg"
                        type="primary"
                        onClick={() => {}}
                    >Shop Now</Button>
                </Card>
            </div>
        </div>
    );
};

export default Intro;
