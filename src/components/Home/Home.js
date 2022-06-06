import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";


import style from './Home.module.scss';
import HomeMainSection from "./HomeMainSection/HomeMainSection";

const Home = () => {

    return (
        <section className={style.container}>
            <HomeHeader/>
            <HomeMainSection />

        </section>
    )
};
export default Home;