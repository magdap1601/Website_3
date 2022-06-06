import React from "react";
import styleAbout from './HomeAboutUs.module.scss';
import background from '../../../assets/People.jpg';
import decoration from '../../../assets/Decoration.svg';
import img from '../../../assets/Signature.svg';

const HomeAboutUs = () => {

    return (
        <section id='aboutUs' className={styleAbout.container}>
            <div className={styleAbout.about}>
                <h1>O nas</h1>
                <img src={decoration} className={styleAbout.decoration}/>
                <p className={styleAbout.text}>Nori grape silver beet broccoli kombu beet greens fava bean potato
                    quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={img} className={styleAbout.signature}/>
            </div>
            <img src={background} className={styleAbout.background}/>
        </section>
    )
};
export default HomeAboutUs;