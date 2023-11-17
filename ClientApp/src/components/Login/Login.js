import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavgate hook
import clsx from "clsx";
import axios from 'axios';


import styles from './Login.module.css';
import callApi from "../../api/apiService";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false)

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate(); // Initialize navigate hook

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
        uname: "Invalid username!",
        pass: "Invalid password!"
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        if (username !== "" && password !== "") {
            let data = {
                "Username": username,
                "Password": password
            }
            callApi('login', 'POST', data).then(item => {
                if (item.data.idUser > 0) {
                    alert("Login successfully");
                    sessionStorage.setItem("login", true);
                    sessionStorage.setItem("name", item.data.name);
                    sessionStorage.setItem("email", item.data.email);
                    setLogin(true)
                }
                else {
                    alert("Login error!")
                }
            })
        }
        if (login) {
            /*return <Redirect to={{ pathname: "/home" }} />*/
            navigate("/home"); // Redirect to the Home component
        }


        //try {
        //    const response = await axios.post('/api/login', { username: username, password: password });
        //    const { redirectTo } = response.data;

        //    // Redirect the user to the specified route
        //    window.location.href = redirectTo;
        //} catch (error) {
        //    // Handle login error
        //    console.error('Login failed:', error.response.data.message);
        //}
    };

    //const handleSubmit = (event) => {
    //    event.preventDefault();
    //    var { uname, pass } = document.forms[0];
    //    const userData = database.find((user) => user.username === uname.value);

    //    if (userData) {
    //        if (userData.password !== pass.value) {
    //            setErrorMessages({ name: "pass", message: errors.pass });
    //        } else {
    //            setIsSubmitted(true);
    //            navigate("/home"); // Redirect to the Home component
    //        }
    //    } else {
    //        setErrorMessages({ name: "uname", message: errors.uname });
    //    }
    //};

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className={styles['error']}>{errorMessages.message}</div>
        );

    const renderForm = (
        <div className={styles['app']}>
            <div className={styles['login-form']}>
                <div className={styles['title']}>Sign In</div>
                <div className={styles.form}>
                    <form onSubmit={handleLogin}>
                        <div className={styles['input-container']}>
                            <label htmlFor="uname">Username </label> 
                            <input className={styles['uname-input']} type="text" id="uname" name="uname" required
                                onChange={(e) => setUsername(e.target.value)}/> 
                            {renderErrorMessage("uname")}
                        </div>
                        <div className={styles['input-container']}>
                            <label htmlFor="pass">Password </label> 
                            <input className={styles['pass-input']} type="password" id="pass" name="pass" required
                                onChange={(e) => setPassword(e.target.value)}/> 
                            {renderErrorMessage("pass")}
                        </div>
                        <p className={clsx("text-center mt-3")}>
                            <Link className={styles['forgot-password']} to="/sign-up" >Forgot your password?</Link>
                        </p>
                        <div className={styles['button-container']}>
                            <button type="submit">Sign In</button>
                        </div>
                        <p className={clsx(styles['sign-in-text'], "text-center text-white")}>
                            Not registered? <Link className={styles['sign-in-link']} to="/sign-up">Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );

    return (
        renderForm
    );
}

export default Login;
