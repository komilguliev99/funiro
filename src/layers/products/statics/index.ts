import Product1 from '../../../assets/images/product1.png';
import Product2 from '../../../assets/images/product2.png';
import Product3 from '../../../assets/images/product3.png';
import Product4 from '../../../assets/images/product4.png';
import Product5 from '../../../assets/images/product5.png';
import Product6 from '../../../assets/images/product6.png';
import Product7 from '../../../assets/images/product7.png';
import Product8 from '../../../assets/images/product8.png';

export interface IProduct {
	title: string;
	subtitle: string;
	price: string;
	discount?: string;
	tag?: string;
	image: string;
}

export const products: IProduct[] = [
    {
        title: 'Syltherine',
        subtitle: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        discount: 'Rp 3.500.000',
        tag: '-30%',
        image: Product1
    },
    {
        title: 'Leviosa',
        subtitle: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        image: Product2
    },
    {
        title: 'Lolito',
        subtitle: 'Luxury big sofa',
        price: 'Rp 7.000.000',
        discount: 'Rp 14.000.000',
        tag: '-50%',
        image: Product3
    },
    {
        title: 'Respira',
        subtitle: 'Minimalist fan',
        price: 'Rp 500.000',
        image: Product4
    },
    {
        title: 'Grifo',
        subtitle: 'Night lamp',
        price: 'Rp 1.500.000',
        image: Product5
    },
    {
        title: 'Muggo',
        subtitle: 'Small mug',
        price: 'Rp 150.000',
        tag: 'new',
        image: Product6
    },
    {
        title: 'Pingky',
        subtitle: 'Cute bed set',
        price: 'Rp 7.000.000',
        discount: 'Rp 14.000.000',
        tag: '-50%',
        image: Product7
    },
    {
        title: 'Potty',
        subtitle: 'Minimalist flower pot',
        price: 'Rp 500.000',
        tag: 'new',
        image: Product8
    }
];
