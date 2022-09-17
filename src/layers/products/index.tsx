import React, { FC } from 'react';
import { Button, ProductCard } from '../../components';
import { products } from './statics';
import './index.scss';

const Proucts: FC<{}> = () => {
    return (
        <div className="Products">
            <div className="custom-container">
                <h4 className="Products__title">Our Products</h4>
                <div className="Producst__content">
                    <div className="row">
                        {
                            products.map(item => (
                                <div key={item.title} className="col-lg-3 col-md-4 col-sm-6">
                                    <ProductCard { ...item } />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="Products__show-more">
                    <Button inline={true} size="md" type="primary-outline">Show More</Button>
                </div>
            </div>
        </div>
    );
};


export default Proucts;
