import React, { FC } from 'react';
import { Icon } from '..';
import './index.scss';

interface IFact {
	text: string;
	iconName: string;
	iconColor?: string;
}

const Fact: FC<IFact> = ({
    text, iconName, iconColor
}) => {
    return (
        <div className="Fact">
            <Icon size={20} name={iconName} color={iconColor} />
            <p>{ text }</p>
        </div>
    );
};

export default Fact;
