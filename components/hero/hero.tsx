import React, { useState, useEffect } from 'react';
import styles from './hero.module.css';

export default function Hero(props: IHeroProps) {
    const t = props.thumbnail;
    const h = props.hero;
    const hasThumbnail = !!props.thumbnail;
    const [hero, setHero] = useState(hasThumbnail ? t : h);

    if (hasThumbnail) {
        useEffect(() => {
            const i = new Image();

            i.onload = () => {
                setHero(h);
            };

            i.src = h;
        }, []);
    }

    return (
        <div className={`bg-cover ${styles.bg}`} style={{ backgroundImage: `url(${hero})` }}></div>
    );
}

export interface IHeroProps {
    hero: string;
    thumbnail?: string;
}