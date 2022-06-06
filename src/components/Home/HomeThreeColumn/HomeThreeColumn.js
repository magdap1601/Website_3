import React from "react";
import style from './HomeThreeColumn.module.scss';

const HomeThreeColumn = () => {

    return (
        <section id='threeColumn' className={style.statistics}>
            <div className={style.singleElement}>
                <h1>10</h1>
                <p className={style.text}>ODDANYCH WORKÓW</p>
                <p className={style.text2}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                    viverra elementuma. Aliquam erat volutpat.</p>
            </div>

            <div className={style.singleElement}>
                <h1>5</h1>
                <p className={style.text}>ODDANYCH WORKÓW</p>
                <p className={style.text2}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                    viverra elementuma. Aliquam erat volutpat.</p>
            </div>

            <div className={style.singleElement}>
                <h1>7</h1>
                <p className={style.text}>ODDANYCH WORKÓW</p>
                <p className={style.text2}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                    viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    )
};
export default HomeThreeColumn;