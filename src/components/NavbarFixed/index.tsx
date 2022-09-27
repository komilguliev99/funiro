import classNames from 'classnames';
import React, { FC } from 'react';
import { Icon } from '..';
import Searchbar from '../Searchbar';
import './index.scss';

interface INavbarFixed {
	isActive?: boolean;
	onClose: () => void;
}

const NavbarFixed: FC<INavbarFixed> = ({
    isActive = false,
    onClose
}) => {
    return (
        <div onClick={() => onClose()} className={classNames('NavbarFixed', {'active': isActive})}>
            <div className="NavbarFixed__close"><Icon name="close" size={24} /></div>
            <div className="NavbarFixed__content">
                <h2>Funiro</h2>
                <Searchbar />
                <div className="NavbarFixed__item NavbarFixed__item_drop">Products
                    <div className="NavbarFixed__drop-box">
                        <div className="NavbarFixed__drop-item">Product 1</div>
                        <div className="NavbarFixed__drop-item">Product 2</div>
                        <div className="NavbarFixed__drop-item">Product 3</div>
                    </div>
                </div>
                <div className="NavbarFixed__item NavbarFixed__item_drop">Rooms
                    <div className="NavbarFixed__drop-box">
                        <div className="NavbarFixed__drop-item">Room 1</div>
                        <div className="NavbarFixed__drop-item">Room 2</div>
                        <div className="NavbarFixed__drop-item">Room 3</div>
                    </div>
                </div>
                <div className="NavbarFixed__item">Inspirations</div>
                <div className="NavbarFixed__item NavbarFixed__item_drop">Account
                    <div className="NavbarFixed__drop-box">
                        <div className="NavbarFixed__drop-item">My Account</div>
                        <div className="NavbarFixed__drop-item">My Cart</div>
                        <div className="NavbarFixed__drop-item">My Catalog</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarFixed;
