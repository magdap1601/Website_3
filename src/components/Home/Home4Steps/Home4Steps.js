import React from "react";
import steps from './Home4Steps.module.scss';
import decoration from '../../../assets/Decoration.svg';
import shirt from '../../../assets/Icon-1.svg';
import bag from '../../../assets/Icon-2.svg';
import magnifier from '../../../assets/Icon-3.svg';
import order from '../../../assets/Icon-4.svg';
import {useHistory} from 'react-router-dom';

const Home4Steps = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/Zaloguj')
    }
    return (
        <section id='4steps' className={steps.container}>
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={decoration} className={steps.decoration}/>
            <div className={steps.box}>
                <div className={steps.singleStep}>
                    <img src={shirt} className={steps.picture}/>
                    <h3>Wybierz rzeczy</h3>
                    <p className={steps.line}></p>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className={steps.singleStep}>
                    <img src={bag}/>
                    <h3>Spakuj je</h3>
                    <p className={steps.line}></p>
                    <p>skorzystaj z <br/> worków na śmieci</p>
                </div>
                <div className={steps.singleStep}>
                    <img src={magnifier}/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <p className={steps.line}></p>

                    <p>wybierz zaufane miejsce</p>
                </div>

                <div className={steps.singleStep}>
                    <img src={order}/>
                    <h3>Zamów kuriera</h3>
                    <p className={steps.line}></p>
                    <p>kurier przyjedzie <br/> w dogodnym terminie</p>
                </div>
            </div>
            <button className={steps.handOver} onClick={handleClick}>
                ODDAJ RZECZY
            </button>
        </section>
    )
};
export default Home4Steps;