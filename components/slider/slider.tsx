import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './slider.module.css';

export default function Slider(props: ISliderProps) {
    return (
        <Carousel autoPlay={props.auto} infiniteLoop={true} swipeable={false} interval={5000} showArrows={false} showStatus={false} showThumbs={false} transitionTime={1500} stopOnHover={false}>
            {
                props.slides.map((s, i) => {
                    return (
                        <div key={i} className={styles.slide}>
                            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${styles.header}`}>{s}</h1>
                        </div>
                    );
                })
            }
        </Carousel>
    );
}

export interface ISliderProps {
    slides: string[];
    auto?: boolean;
}
