import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import SliderDefault, { IItem } from './_default';
import SliderExplore, { IItemExplore } from './explore';
import './index.scss';
import SliderTips, { IItemTips } from './tips';

interface ISlider {
	items: IItem[] | IItemExplore[] | IItemTips[];
	type: 'default' | 'explore' | 'tips'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TEMPLATES: Record<ISlider['type'], FC<any>> = {
    default: SliderDefault,
    explore: SliderExplore,
    tips: SliderTips
};

const Slider: FC<ISlider> = ({
    items, type
}) => {

    const myRef: RefObject<HTMLDivElement> = useRef(null);
    const [step, setStep] = useState(0);

    const nextSlide = (inc: number) => {
        const curr = step + inc;
        console.log(curr, items.length);
        if (curr < 0 || curr > items.length - 1) return;
        console.log(curr);
        setStep(curr);
    };

    const onDotClick = (e: Event) => {
        const target = e.target as HTMLSpanElement;
        const idx = target.dataset.id;
        if (!target.classList.contains('Slider__dots'))
       		setStep(Number(idx));
    };

    const onClick = (e: Event) => {
        const target = e.target as HTMLElement;
        const step = (target.classList.contains('arrowLeft') && -1) ||
						(target.classList.contains('arrowRight') && 1) || 0;
        console.log(target, step);
        if (step !== 0) {
            nextSlide(step);
        }
    };

    useEffect(() => {
        const dots = myRef.current && myRef.current.querySelector('.Slider__dots');
        if (myRef.current) {
            dots?.addEventListener('click', onDotClick);
            myRef.current.addEventListener('click', onClick);
        }
        return () => {
            dots?.removeEventListener('click', onDotClick);
            if (myRef.current) {
			    myRef.current.removeEventListener('click', onClick);
		   }
        };
    }, [myRef, step]);

    const Template = TEMPLATES[type];
    return (
        <div ref={myRef}>
            <Template items={items} active={step}>
                <SliderDots count={items.length} active={step} />
            </Template>
        </div>
    );
};

interface ISliderDots {
	count: number,
	active: number;
}

export const SliderDots: FC<ISliderDots> = ({
    count,
    active
}) => (
    <div className="Slider__dots">
        {
            Array.from(Array(count)).map((item, idx) => (
                <span data-id={idx} key={idx} className={`${idx === active ? 'active' : ''}`} />
            ))
        }
    </div>
);

export default Slider;
