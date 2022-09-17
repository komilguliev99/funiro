import React, { FC } from 'react';
import { Slider } from '../../components';
import './index.scss';
import { tipsData } from './statics';

const Tips: FC<{}> = () => {
    return (
        <div className="Tips">
            <h2>Tips & Tricks</h2>
            <Slider type="tips" items={tipsData} />
        </div>
    );
};


export default Tips;
