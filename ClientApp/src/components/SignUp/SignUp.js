import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import clsx from 'clsx';

import callApi from '../../api/apiService';
import styles from './SignUp.module.css'; // Import the CSS module

const SignUp = () => {
    const [success, setSuccess] = useState(false)
    /* set error alert submit form */
    const [error, setError] = useState(true)
    const [msgError, setMsgError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate hook
    /*SET attribute in Form*/
    const ConfigData = Object.freeze({
        Name: "",
        Avatar: "",
        Age: 0,
        Password: "",
        Email: "",
        Address: "",
        BirthDay: ""
    });

    /*SET Valid attribute*/
    const ConfigDataValid = Object.freeze({
        NameValid: null,
        AvatarValid: null,
        AgeValid: null,
        PasswordValid: null,
        EmailValid: null,
        AddressValid: null,
        BirthDayValid: null
    })
    const [infoData, updateInfoData] = React.useState(ConfigData);
    const [infoDataValid, updateInfoDataValid] = React.useState(ConfigDataValid);
    //const handleChange = (e) => {
    //    checkDataValid(e);
    //};
    //const checkDataValid = (e) => {
    //    if (e.target.value.trim() === "") {
    //        updateInfoDataValid({ ...infoDataValid, [e.target.name + "Valid"]: true })

    //    }
    //    else {
    //        updateInfoDataValid({ ...infoDataValid, [e.target.name + "Valid"]: false })
    //        if (e.target.name !== "Avatar") {
    //            updateInfoData({
    //                ...infoData,
    //                [e.target.name]: e.target.value.trim(),
    //            });
    //        } else {
    //            updateInfoData({
    //                ...infoData,
    //                [e.target.name]: e.target.files[0],
    //            });
    //        }
    //    }
    //}

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!infoDataValid.NameValid && !infoDataValid.AgeValid &&
            !infoDataValid.BirthDayValid && !infoDataValid.EmailValid &&
            !infoDataValid.PasswordValid && !infoDataValid.AddressValid) {
            const _formData = new FormData();
            _formData.append('Name', infoData.Name);
            _formData.append('BirthDay', infoData.BirthDay);
            _formData.append('Age', infoData.Age);
            _formData.append('Address', infoData.Address);
            _formData.append('Email', infoData.Email);
            _formData.append('Password', infoData.Password);
            _formData.append('Avatar', infoData.Avatar);

            callApi(`register`, 'POST', _formData).then((item) => {
                console.log(item)
                if (item.data > 0) {
                    setSuccess(true);
                } else if (item.data === -1) {
                    setError(false);
                    setMsgError("This email already exists");
                } else {
                    setError(false);
                    setMsgError("Error login");
                }

            });
        }
        else {
            setError(false);

        }


    };
    if (success) {
        navigate("/home");
    }


    const [formData, setFormData] = useState({
        uname: '',
        email: '',
        pass: '',
    });

    const [email, setEmail] = useState(""); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    

    //const handleSubmit = (e) => {
    //    e.preventDefault();
    //    // Add your form submission logic here
    //    console.log('Form submitted:', formData);
    //};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const renderErrorMessage = (fieldName) => {
        // Add your error message rendering logic based on fieldName
        return null; // Placeholder, replace with actual error message rendering
    };

    const renderForm = (
        <div className={styles.app}>
            <div className={styles['signup-form']}>
                <div className={styles.title}>Sign Up</div>
                <form onSubmit={handleSignup}>
                    <div className={styles['input-container']}>
                        <label htmlFor="uname">Username </label>
                        <input
                            type="text"
                            id="uname"
                            name="uname"
                            value={formData.uname}
                            onChange={handleChange}
                            required
                        />
                        {renderErrorMessage('uname')}
                    </div>
                    <div className={styles['input-container']}>
                        <label htmlFor="email">Email </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {renderErrorMessage('email')}
                    </div>
                    <div className={styles['input-container']}>
                        <label htmlFor="pass">Password </label>
                        <input
                            type="password"
                            id="pass"
                            name="pass"
                            value={formData.pass}
                            onChange={handleChange}
                            required
                        />
                        {renderErrorMessage('pass')}
                    </div>
                    <div className={styles['button-container']}>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
                <p className={clsx(styles['sign-up-text'], "text-center text-white")}>
                    Already a member? <Link className={styles['sign-up-link']} to="/sign-in">Sign In</Link>
                </p>
            </div>
        </div>
    )

    return (
        renderForm
    );
};

export default SignUp;
