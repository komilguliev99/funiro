import React, { FC } from 'react';
import './index.scss';

interface ICard {
	size: 'sm' | 'md' | 'lg';
	children?: React.ReactNode;
}

const Card: FC<ICard> = ({
    size, children
}) => {

    return (
        <div className={`Card Card_${size}`}>
            <div className="Card__content">{ children }</div>
        </div>
    );
};

export default Card;
