import React from "react";
import mainImg from '../../../assets/Home-Hero-Image.jpg';
import mainSection from './HomeMainSection.module.scss';
import decoration from '../../../assets/Decoration.svg';
import {useHistory} from 'react-router-dom';


const HomeMainSection = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/Zaloguj')
    }

    return (
        <section id='mainSection' className={mainSection.container}>
            <img src={mainImg} className={mainSection.img}/>
            <div className={mainSection.wrapper}>
                <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration}/>
                <div className={mainSection.boxes}>
                    <button className={mainSection.singleBox} onClick={handleClick}>
                        ODDAJ<br/> RZECZY
                    </button>
                    <button className={mainSection.singleBox} onClick={handleClick}>ZORAGNIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </section>
    )
};
export default HomeMainSection;