import React, { FC } from 'react';
import { Icon } from '..';
import './index.scss';

interface IIconButton {
	text: string;
	iconName: string;
	iconColor?: string;
}

const IconButton: FC<IIconButton> = ({
    text, iconName, iconColor
}) => {
    return (
        <div className="IconButton">
            <Icon size={24} name={iconName} color={iconColor} />
            <p>{ text }</p>
        </div>
    );
};

export default IconButton;
