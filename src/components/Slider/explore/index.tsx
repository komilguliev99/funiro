import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import Icon from '../../Icon';
import Card from '../../Card';
import './index.scss';

export interface IItemExplore {
	title: string;
	desc: string;
	img: string;
}

export interface ISliderExplore {
	active: number;
	items: IItemExplore[];
	children?: React.ReactNode
}

const SliderExplore: FC<ISliderExplore> = ({
    active, items, children
}) => {
    const myRef: RefObject<HTMLDivElement> = useRef(null);
    const [width, setWidth] = useState(300);
    const step = active;

    const onWindowResize = () => {
        if (myRef.current) {
            const slide = myRef.current.querySelector('.SliderExplore__item');
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
    const left = -(step * width + (step) * 20) + 'px';

    return (
        <div ref={myRef} className="SliderExplore">
            <div className="SliderExplore__dots-container">{ children }</div>
            <div className={`SliderExplore__arrow arrowLeft ${leftControllClass}`}>
                <Icon size={24} name="arrow-right" color="orange" className="arrowLeft" />
            </div>
            <div className={`SliderExplore__arrow arrowRight ${rightControllClass}`}>
                <Icon size={24} name="arrow-right" color="orange" className="arrowRight" />
            </div>
            <div className="SliderExplore__container">
                <div
                    style={{ left }}
                    className="SliderExplore__content">
                    {
                        items.map((item: IItemExplore, idx) => {
                            const { title, desc, img } = item;
                            return (
                                <div
                                    key={idx}
                                    style={{ backgroundImage: `url(${img})`}}
                                    className={`SliderExplore__item ${idx === active ? 'active' : ''}`}>
                                    <div className="SliderExplore__item__card">
                                        <Card size="sm">
                                            <p>{ desc }</p>
                                            <h4 className="SliderExplore__item__title">{ title }</h4>
                                        </Card>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div style={{ backgroundImage: `url(${items[0].img})`}} className="SliderExplore__item"></div>
                </div>
            </div>
        </div>
    );
};

export default SliderExplore;
