import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory
import styles from './Login.module.css';

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate(); // Initialize history

    const database = [
        {
            username: "user1",
            password: "tanln123"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                navigate("/home"); // Redirect to the Home component
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className={styles['error']}>{errorMessages.message}</div>
        );

    const renderForm = (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <div className={styles['input-container']}>
                    <label htmlFor="uname">Username </label> {/* Add htmlFor attribute */}
                    <input type="text" id="uname" name="uname" required /> {/* Add id attribute */}
                    {renderErrorMessage("uname")}
                </div>
                <div className={styles['input-container']}>
                    <label htmlFor="pass">Password </label> {/* Add htmlFor attribute */}
                    <input type="password" id="pass" name="pass" required /> {/* Add id attribute */}
                    {renderErrorMessage("pass")}
                </div>
                <div className={styles['button-container']}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className={styles['app']}>
            <div className={styles['login-form']}>
                <div className={styles['title']}>Sign In</div>
                {isSubmitted ? (
                    // Don't show the notification here
                    // Redirect to the Home component instead
                    renderForm
                ) : (
                    renderForm
                )}
            </div>
        </div>
    );
}

export default Login;
