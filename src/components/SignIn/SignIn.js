import React, {useState} from "react";
import decoration from '../../assets/Decoration.svg';
import styles from './SignIn.module.scss';
import HomeHeader from "../Home/HomeHeader/HomeHeader";
import styleContact from "../Home/HomeContact/HomeContact.module.scss";
import {validEmailRegex} from "../../helpers";
import {validateForm} from "../../helpers";
import {useHistory} from 'react-router-dom';

const SignIn = () => {
    const [formSignIn, setFormSignIn] = useState({emailSignIn: '', passwordSignIn: ''});
    const [msgError, setMsgError] = useState({emailError: '', passwordError: ''});

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormSignIn(formSignIn => {
            return {
                ...formSignIn,
                [name]: value
            }
        });
        switch (name) {
            case 'emailSignIn':
                msgError.emailError =
                    validEmailRegex.test(value) || value.length === 0
                        ? ''
                        : 'Podany email jest nieprawidłowy!';
                break;
            case 'passwordSignIn':
                msgError.passwordError =
                    value.length < 6 || value.length === 0
                        ? 'Podane hasło jest za krótkie!'
                        : '';
                break;

            default:
                break;
        }
    }
    validateForm(msgError);

    const history = useHistory();
    const handleClick = () => {
        history.push('/ZalozKonto')
    }
    return (
        <>
            <HomeHeader/>
            <div className={styles.container}>
                <h2 className={styles.title}>Zaloguj się</h2>
                <img src={decoration}/>
                <div className={styles.box}>
                    <label/>Email
                    <input className={styles.singleInput} type='text' name='emailSignIn' value={formSignIn.emailSignIn}
                           onChange={handleChange}/>
                    <p className={styleContact.errors}>{msgError.emailError}</p>
                    <label className={styles.label}>Hasło</label>
                    <input className={styles.singleInput} type='password' name='passwordSignIn'
                           value={formSignIn.passwordSignIn} onChange={handleChange}/>
                    <p className={styleContact.errors}>{msgError.passwordError}</p>
                </div>
                <div className={styles.boxButtons}>
                    <button className={styles.singleButton} onClick={handleClick}>Załóż konto</button>
                    <button className={styles.singleButton}>Zaloguj się</button>
                </div>
            </div>
        </>
    )
};
export default SignIn;