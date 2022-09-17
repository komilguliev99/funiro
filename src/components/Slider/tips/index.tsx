import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import { SliderDots } from '..';
import Icon from '../../Icon';
import './index.scss';

export interface IItemTips {
	title: string;
	date: string;
	img: string;
}

export interface ISliderTips {
	active: number;
	items: IItemTips[];
	children?: React.ReactNode
}

const SliderTips: FC<ISliderTips> = ({
    active, items
}) => {
    const myRef: RefObject<HTMLDivElement> = useRef(null);
    const [width, setWidth] = useState(300);
    const [containerWidth, setContainerWidth] = useState(600);
    const step = active;

    const onWindowResize = () => {
        if (myRef.current) {
            const slide = myRef.current.querySelector('.SliderTips__item');
            const container = myRef.current.querySelector('.SliderTips__container');
            setContainerWidth(Number(container?.clientWidth));
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

    const totalSteps = items.length - Math.floor(containerWidth / width);
    const leftControllClass = step === 0 ? 'disabled' : '';
    const rightControllClass = step === totalSteps ? 'disabled' : '';

    const left = -(step * width + (step - 1) * 30) + 'px';

    return (
        <div ref={myRef} className="SliderTips">
            <div className="SliderTips__dots-container">
                <SliderDots count={totalSteps + 1} active={active} />
            </div>
            <div className={`SliderTips__arrow arrowLeft ${leftControllClass}`}>
                <Icon size={24} name="arrow-right" color="orange" className="arrowLeft" />
            </div>
            <div className={`SliderTips__arrow arrowRight ${rightControllClass}`}>
                <Icon size={24} name="arrow-right" color="orange" className="arrowRight" />
            </div>
            <div className="SliderTips__container">
                <div
                    style={{ left }}
                    className="SliderTips__content">
                    {
                        items.map((item: IItemTips, idx) => {
                            const { title, date, img } = item;
                            return (
                                <div
                                    key={idx}
                                    className={`SliderTips__item ${idx === active ? 'active' : ''}`}>
                                    <div
                                        style={{ backgroundImage: `url(${img})`}}
                                        className="SliderTips__item-img"></div>
                                    <div className="SliderTips__item-content">
                                        <h5>{ title }</h5>
                                        <p>{ date }</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div style={{ backgroundImage: `url(${items[0].img})`}} className="SliderTips__item"></div>
                </div>
            </div>
        </div>
    );
};

export default SliderTips;
