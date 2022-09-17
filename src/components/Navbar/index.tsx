import React, { FC } from 'react';
import './index.scss';

const Navbar: FC<{}> = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__item Navbar__item_drop">Products
                <div className="Navbar__drop-box">
                    <div className="Navbar__drop-item">Product 1</div>
                    <div className="Navbar__drop-item">Product 2</div>
                    <div className="Navbar__drop-item">Product 3</div>
                </div>
            </div>
            <div className="Navbar__item Navbar__item_drop">Rooms
                <div className="Navbar__drop-box">
                    <div className="Navbar__drop-item">Room 1</div>
                    <div className="Navbar__drop-item">Room 2</div>
                    <div className="Navbar__drop-item">Room 3</div>
                </div>
            </div>
            <div className="Navbar__item">Inspirations</div>
        </div>
    );
};

export default Navbar;
