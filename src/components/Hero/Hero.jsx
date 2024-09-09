import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
const Hero = () => {
    return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amina</h1>
            <p className={styles.description}>I'm a full-stack developer with 5 years of experience using React and NodeJs.Reach out if you'd like to learn more!</p>
            <a href="mailto:myemail@mail.com" className={styles.conatctBtn} >Contact me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}></img>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    
    
    </section>
    )
}

export default Hero
