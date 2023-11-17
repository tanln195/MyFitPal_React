import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './SignUp.module.css'; // Import the CSS module

const SignUp = () => {
    const [formData, setFormData] = useState({
        uname: '',
        email: '',
        pass: '',
    });

    const [username, setUsername] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

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
                <form onSubmit={handleSubmit}>
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
