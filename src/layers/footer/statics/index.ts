export interface IMenuSet {
	title: string;
	items: string[];
}

export const menuData: IMenuSet[] = [
    {
        title: 'Menu',
        items: ['Products', 'Rooms', 'Inspiration', 'About Us', 'Terms & Policy']
    },
    {
        title: 'Account',
        items: ['My Account', 'Checkout', 'MyCart', 'My catalog']
    },
    {
        title: 'Stay Connected',
        items: ['Facebook', 'Instagram', 'Twitter']
    }
];