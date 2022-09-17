import React, { FC } from 'react';
import { Explore, Facts, Intro, Products, Tips } from '../../layers';

const Main: FC<{}> = () => {
    return (
        <div className="Main">
            <Intro />
            <Facts />
            <Products />
            <Explore />
            <Tips />
        </div>
    );
};

export default Main;
