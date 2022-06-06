import React, {useState} from "react";
import styles from './Register.module.scss';
import HomeHeader from "../Home/HomeHeader/HomeHeader";
import decoration from "../../assets/Decoration.svg";
import {validateForm} from "../../helpers";
import {validEmailRegex} from "../../helpers";
import {useHistory} from 'react-router-dom';

const Register = () => {
    const [registerForm, setRegisterForm] = useState({
        registerEmail: '',
        registerPassword: '',
        registerSecondPassword: ''
    });
    const [registerErrorMsg, setRegisterErrorMsg] = useState({
        regEmailError: '',
        regPassError: '',
        registerPassSecError: '',
        notTheSamePasswordError: ''
    });


    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;

        setRegisterForm(registerForm => {
            return {
                ...registerForm,
                [name]: value
            }
        });
        switch (name) {
            case 'registerEmail':
                registerErrorMsg.regEmailError =
                    validEmailRegex.test(value) || value.length === 0
                        ? ''
                        : 'Podany email jest nieprawidłowy!';
                break;
            case 'registerPassword':
                registerErrorMsg.regPassError =
                    value.length < 6 || value.length === 0
                        ? 'Podane hasło jest za krótkie!'
                        : '';
                break;
            case 'registerSecondPassword':
                registerErrorMsg.registerPassSecError =
                    value.length < 6 || value.length === 0
                        ? 'Podane hasło jest za krótkie! Hasła muszą byc takie same'
                        : '';
                break;
            default:
                break;
        }
    }
    validateForm(registerErrorMsg);
    const history = useHistory();
    const handleClick = () => {
        history.push('/Zaloguj')
    }
    return (
        <>
            <HomeHeader/>
            <div className={styles.container}>
                <h2>Załóż konto</h2>
                <img src={decoration}/>
                <div className={styles.box}>
                    <label/>Email
                    <input className={styles.singleInput} type='text' name='registerEmail'
                           value={registerForm.registerEmail} onChange={handleChange}/>
                    <p className={styles.error}>{registerErrorMsg.regEmailError}</p>
                    <label className={styles.labelStyle}/>Hasło
                    <input className={styles.singleInput} type='password' name='registerPassword'
                           value={registerForm.registerPassword} onChange={handleChange}/>
                    <p className={styles.error}>{registerErrorMsg.regPassError}</p>
                    <label className={styles.labelStyle}/>Powtórz hasło
                    <input className={styles.singleInput} type='password' name='registerSecondPassword'
                           value={registerForm.registerSecondPassword} onChange={handleChange}/>
                    <p className={styles.error}>{registerErrorMsg.registerPassSecError}</p>
                </div>
                <div className={styles.boxButtons}>
                    <button className={styles.singleButton}>Założ konto</button>
                    <button className={styles.singleButton} onClick={handleClick}>Zaloguj się</button>
                </div>
            </div>
        </>
    )
};
export default Register;