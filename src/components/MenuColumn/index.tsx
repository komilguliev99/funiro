import React, { FC } from 'react';
import './index.scss';

interface IMenuColumn {
	title: string;
	items?: string[];
	children?: React.ReactNode
}

const MenuColumn: FC<IMenuColumn> = ({
    title, items = [], children
}) => {
    return (
        <div className="MenuColumn">
            <h5>{ title }</h5>
            { items.map(item => <p key={item}>{ item }</p>) }
            { children }
        </div>
    );
};

export default MenuColumn;
