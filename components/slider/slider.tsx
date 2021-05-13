import React from 'react';
import Carousel from 'react-slick';
import Hero from '../hero/hero';
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
                        <div key={i} className={`${styles.slide}`}>
                            <div className="shroud"></div>
                            <Hero hero={s.hero} thumbnail={s.thumbnail}></Hero>
                            <h1 className={`text-3xl sm:text-5xl md:text-6xl ${styles.header}`}>{s.header}</h1>
                        </div>
                    );
                })
            }
        </Carousel>
    );
}

export interface ISliderProps {
    slides: {
        hero?: string;
        thumbnail?: string;
        header?: string;
    }[];
}
