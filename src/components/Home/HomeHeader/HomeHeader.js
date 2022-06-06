import React from "react";
import {Link} from 'react-scroll'
import {useHistory} from "react-router-dom";
import header from './HomeHeader.module.scss';

const HomeHeader = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    }

    return (
        <section className={header.container}>
            <div className={header.list}>
                <Link className={header.link} activeClass="active" to="/" spy={true}
                      smooth={true} onClick={handleClick}>Start</Link>
                <Link className={header.link} activeClass="active" to="4steps" spy={true} smooth={true}>O co
                    chodzi</Link>
                <Link className={header.link} activeClass="active" to="aboutUs" spy={true} smooth={true}>O nas</Link>
                <Link className={header.link} activeClass="active" to="help" spy={true} smooth={true}>Fundacja i
                    organizacje</Link>
                <Link className={header.link} activeClass="active" to="contact" spy={true} smooth={true}>Kontakt</Link>
            </div>
        </section>
    )
};
export default HomeHeader;