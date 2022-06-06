import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";


import style from './Home.module.scss';

const Home = () => {

    return (
        <section className={style.container}>
            <HomeHeader/>

        </section>
    )
};
export default Home;