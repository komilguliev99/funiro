import React, { FC } from 'react';
import { Icon, Navbar, Searchbar } from '../../components';
import './index.scss';

interface IHeader {
	hasBackground?: boolean;
}

const Header: FC<IHeader> = ({
    hasBackground = false
}) => {

    const classes = [
        'Header',
        (hasBackground && 'Header_bg') || ''
    ].join(' ');

    return (
        <header className={classes}>
            <div className="custom-container">
                <div className="row">
                    <div className="col-lg-9 col-md-8">
                        <div className="Header__left">
                            <h4 className="Header__logo">Funiro.</h4>
                            <Navbar />
                            <Searchbar />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="Header__right">
                            <Icon name="heart" size={24} />
                            <Icon name="cart" size={24} />
                            <img src="images/user.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
