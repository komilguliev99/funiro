import React, { FC } from 'react';
import { Icon } from '..';
import './index.scss';

interface IInput {
	placeholder?: string;
	iconName?: string;
}

const Input: FC<IInput> = ({
    placeholder, iconName
}) => {
    return (
        <div className="Input">
            <input type="text" placeholder={placeholder} />
            <div className="Input__btn"><Icon name={String(iconName)} size={24} /></div>
        </div>
    );
};

export default Input;
