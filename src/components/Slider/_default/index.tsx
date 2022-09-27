import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import Icon from '../../Icon';
import Card from '../../Card';
import './index.scss';

export interface IItem {
	title: string;
	subtitle: string;
	price: string;
	img: string;
}

export interface ISliderDefault {
	active: number;
	items: IItem[];
	children?: React.ReactNode
}

const SliderDefault: FC<ISliderDefault> = ({
    active, items, children
}) => {
    const myRef: RefObject<HTMLDivElement> = useRef(null);
    const [width, setWidth] = useState(300);
    const step = active;

    const onWindowResize = () => {
        if (myRef.current) {
            const slide = myRef.current.querySelector('.SliderDefault__item');
            setWidth(Number(slide?.clientWidth));
        }
    };

    useEffect(() => {
        if (myRef.current) {
            onWindowResize();
            window.addEventListener('resize', onWindowResize);
        }
        return () => {
            myRef.current?.removeEventListener('resize', onWindowResize);
        };
    }, [myRef]);

    const leftControllClass = step === 0 ? 'disabled' : '';
    const rightControllClass = step === items.length - 1 ? 'disabled' : '';

    console.log('Step: ', step, width);
    const alpha = (width < 600) ? 1 : .8;
    const len = items.length;
    const left = -(step * width + step * 30 + (alpha === 1 ? 30 : 0) + ((alpha) * width)) + 'px';

    return (
        <div ref={myRef} className="SliderDefault">
            <div className="SliderDefault__controlls">
                { children }
                <div className="SliderDefault__arrows">
                    <div className={`SliderDefault__arrow arrowLeft ${leftControllClass}`}>
                        <Icon size={24} name="arrow-right" className="arrowLeft" />
                    </div>
                    <div className={`SliderDefault__arrow arrowRight ${rightControllClass}`}>
                        <Icon size={24} name="arrow-right" className="arrowRight" />
                    </div>
                </div>
            </div>
            <div className="SliderDefault__container">
                <div
                    style={{ left }}
                    className="SliderDefault__content">
                    <div 
                        style={{ backgroundImage: `url(${items[len - 1].img})`}}
                        className="SliderDefault__item" />
                    {
                        items.map((item: IItem, idx) => {
                            const { title, subtitle, price, img } = item;
                            return (
                                <div
                                    key={idx}
                                    style={{ backgroundImage: `url(${img})`}}
                                    className="SliderDefault__item">
                                    <div className="SliderDefault__item__card">
                                        <Card size="sm">
                                            <h5 className="SliderDefault__item__title">{ title }</h5>
                                            <h6 className="SliderDefault__item__subtitle">{ subtitle }</h6>
                                            <p className="SliderDefault__item__price">{ price }</p>
                                            <div className="SliderDefault__item__icon"><Icon name="chevron-right" size={24} /></div>
                                        </Card>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div 
                        style={{ backgroundImage: `url(${items[0].img})`}}
                        className="SliderDefault__item" />
                </div>
            </div>
        </div>
    );
};

export default SliderDefault;
