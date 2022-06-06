import React, {useState} from "react";
import styleContact from './HomeContact.module.scss';
import decoration from '../../../assets/Decoration.svg';
import facebookImg from '../../../assets/Facebook.svg';
import instagramImg from '../../../assets/Instagram.svg';
import {validEmailRegex} from "../../../helpers";

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (singleError) => singleError.length > 0 && (valid === false)
    );
    return valid;
};
const HomeContact = () => {
    const [form, setForm] = useState({fullName: '', email: '', message: ''});
    const [errors, setErrors] = useState({nameError: '', emailError: '', messageError: ''});
    const [validMessage, setValidMessage] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;

        setForm(form => {
            return {
                ...form,
                [name]: value
            }
        });

        switch (name) {
            case 'fullName':
                errors.nameError =
                    value.length < 5 || value.length === 0
                        ? 'Podane imię jest nieprawidłowe'
                        : '';
                break;
            case 'email':
                errors.emailError =
                    validEmailRegex.test(value) || value.length === 0
                        ? ''
                        : 'Podany email jest nieprawidłowy';
                break;
            case 'message':
                errors.messageError =
                    value.length < 120 || value.length === 0
                        ? 'Wiadomość musi mieć co najmniej 120 znaków'
                        : '';
                break;
            default:
                break;
        }
    }
    const handleSubmit = (e) => {
        const {fullName, email, message} = form;
        e.preventDefault();
        if (validateForm(errors) && fullName.length > 0 && email.length > 0 && message.length > 120) {
            setValidMessage('Wiadomość zostala wysłana! Wkrótce się skontaktujemy')
            setForm({
                fullName: '',
                message: '',
                email: ''
            })
        } else {
            console.error('Invalid Form')
        }
    }

    return (
        <section id='contact' className={styleContact.section}>
            <div className={styleContact.contactUsBox}>
                <h1>Skontaktuj się z nami</h1>
                <img src={decoration}/>
                <p className={styleContact.validMessage}>{validMessage}</p>
                <form className={styleContact.form} onSubmit={handleSubmit}>
                    <div className={styleContact.inputs}>
                        <div className={styleContact.singleLabel}>
                            <label/>Wpisz swoje imię
                            <input type='text' name='fullName' value={form.fullName} onChange={handleChange}/>
                            <p className={styleContact.errors}>{errors.nameError}</p>
                        </div>
                        <div className={styleContact.singleLabel}>
                            <label/>Wpisz swój email
                            <input type='text' name='email' value={form.email} onChange={handleChange}/>
                            <p className={styleContact.errors}>{errors.emailError}</p>
                        </div>
                    </div>

                    <label className={styleContact.textareaLabel}/>Wpisz wiadomość
                    <textarea className={styleContact.textareaStyle} name='message' value={form.message}
                              onChange={handleChange}

                              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                    <p className={styleContact.errors}>{errors.messageError}</p>

                    <button className={styleContact.button}>Wyślij</button>
                </form>
            </div>
            <footer className={styleContact.footer}>
                <h3 className={styleContact.title}>Copyright by Coders Lab</h3>
                <div className={styleContact.imgs}>
                    <a href='#'><img src={facebookImg}/></a>
                    <a href='#'><img src={instagramImg}/></a>
                </div>
            </footer>
        </section>
    )
};
export default HomeContact;