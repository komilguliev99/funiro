import React, { FC } from 'react';
import { Icon } from '../../components';
import './index.scss';

const facts = [
    {
        title: 'High Quality',
        subtitle: 'crafted from top materials',
        icon: 'top'
    },
    {
        title: 'Warrany Protection',
        subtitle: 'Over 2 years',
        icon: 'protection'
    },
    {
        title: 'Free Shipping',
        subtitle: 'Order over 150 $',
        icon: 'shipping'
    },
    {
        title: '24 / 7 Support',
        subtitle: 'Dedicated support',
        icon: 'support'
    }
];

const Facts: FC<{}> = () => {

    return (
        <div className="custom-container">
            <div className="Facts">
                {
                    facts.map(({ title, subtitle, icon}) => (
                        <div key={icon} className="Facts__item">
                            <Icon size={40} name={icon} />
                            <div className="Facts__item-content">
                                <h4>{ title }</h4>
                                <p>{ subtitle }</p>
                            </div>
                        </div>
                    ))
                }	
            </div>
        </div>
    );
};


export default Facts;
