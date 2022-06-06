import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import style from './Home.module.scss';
import HomeMainSection from "./HomeMainSection/HomeMainSection";
import Home4Steps from "./Home4Steps/Home4Steps";
import HomeThreeColumn from "./HomeThreeColumn/HomeThreeColumn";
import HomeAboutUs from "./HomeAboutUs/HomeAboutUs";

const Home = () => {

    return (
        <section className={style.container}>
            <HomeHeader/>
            <HomeMainSection />
            <HomeThreeColumn/>
            <Home4Steps/>
            <HomeAboutUs/>

        </section>
    )
};
export default Home;