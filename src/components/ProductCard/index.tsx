import React, { FC } from 'react';
import { Button, IconButton } from '..';
import './index.scss';

interface IProductCard {
	title: string;
	subtitle: string;
	price: string;
	discount?: string;
	tag?: string;
	image: string;	
}

const ProductCard: FC<IProductCard> = ({
    title, subtitle, price, image, tag, discount
}) => {

    return (
        <div className="ProductCard">
            <div style={{ backgroundImage: `url(${image})` }} className="ProductCard__img" />
            <div className="ProductCard__content">
                <h4>{ title }</h4>
                <p className="ProductCard__subtitle">{ subtitle }</p>
                <p>{ price } { Boolean(discount) && <span>{ discount }</span> }</p>
                { Boolean(tag) && <span className={tag === 'new' ? 'new' : ''}>{ tag }</span> }
            </div>
            <div className="ProductCard__shadow-content">
                <Button size="md" type="secondary">Add to cart</Button>
                <div className="ProductCard__buttons">
                    <IconButton iconName="share" text="Share" />
                    <IconButton iconName="heart" iconColor="white" text="Like" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
