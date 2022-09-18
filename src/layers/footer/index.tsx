import React, { FC } from 'react';
import { Fact, Input, MenuColumn } from '../../components';
import './index.scss';
import { menuData } from './statics';

const Footer: FC<{}> = () => {
    return (
        <div className="Footer">
            <div className="custom-container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="Footer__container">
                            <h5 className="Footer__logo">Funiro.</h5>
                            <p className="Footer__text">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
                            <Fact iconName="location" text="Dushanbe, Tajikistan" />
                            <Fact iconName="phone" text="+992 985 019 111" />
                            <a href="https://komilguliev99.github.io/profile">www.komilguliev99.io</a>
                        </div>
                    </div>
                    {
                        menuData.map(item => (
                            <div key={item.title} className="col-lg-2 col-md-3">
                                <MenuColumn { ...item } />
                            </div>
                        ))
                    }
                    <div className="col-lg-3 col-md-6">
                        <MenuColumn title="Stay Updated">
                            <Input placeholder="Enter your email" iconName="send" />
                        </MenuColumn>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;
