import React, { FC } from 'react';
import { Explore, Facts, Footer, Gallery, Intro, Products, Tips } from '../../layers';

const Main: FC<{}> = () => {
    return (
        <div className="Main">
            <Intro />
            <Facts />
            <Products />
            <Explore />
            <Tips />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Main;
