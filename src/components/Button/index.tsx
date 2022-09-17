import React, { FC } from 'react';
import './index.scss';

interface IButton {
	size: 'sm' | 'md' | 'lg';
	type: 'primary' | 'secondary' | 'primary-outline';
	inline?: boolean;
	children?: React.ReactNode;
	onClick?: () => void;
}

const Button: FC<IButton> = ({
    size,
    type,
    inline,
    children,
    onClick
}) => {
    const inlineButton = Boolean(inline) ? 'Button_inline' : '';
    return (
        <div
            onClick={onClick}
            className={`Button ${inlineButton} Button_${size} Button_${type}`}
        >{ children }</div>
    );
};

export default Button;
