import React from 'react';
import Carousel from "react-slick";
import styles from './slider.module.css';

export default function Slider(props: ISliderProps) {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <Carousel { ...settings }>
            {
                props.slides.map((s, i) => {
                    return (
                        <div key={i} className={`bg-cover ${styles.slide}`}>
                            <div className="h-full" style={{ backgroundImage: `url(${s.hero})` }}></div>
                        </div>
                    );
                })
            }
        </Carousel>
    );
}

export interface ISliderProps {
    slides: { hero?: string; thumbnail?: string; }[];
}
