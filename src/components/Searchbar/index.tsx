import React, { ChangeEvent, FC, useState } from 'react';
import { Icon } from '..';
import './index.scss';

const Searchbar: FC<{}> = () => {

    const [searchPattern, setSearchPattern] = useState('');

    const patternChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchPattern(value);
    };

    const clearPattern = () => {
        setSearchPattern('');
    };

    return (
        <div className="Searchbar">
            <Icon
                size={20}
                name="search"
            />
            <input
                onChange={patternChange}
                value={searchPattern}
                type="text"
                placeholder="Search for minimalist chair" />
            <span
                onClick={clearPattern}
                className="Searchbar__clear" />
        </div>
    );
};

export default Searchbar;
