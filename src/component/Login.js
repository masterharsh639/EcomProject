import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user')
        console.log(typeof auth, "h")

        if (auth) {
            console.log(auth, "iiiii")
            navigate('/productlist');
        }
    }, [])
    const handleLogin = async () => {
        console.log(email, password);
        let result = await fetch('http://localhost:5000/login',
            {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        result = await result.json();
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.token));
            navigate('/addproduct');
        }
    }

    return (
        <div className="login-form">
            <h2>Login Form</h2>
            <input className="inputBox" placeholder="Email" type="text"
                onChange={(e) => setEmail(e.target.value)} value={email} />

            <input className="inputBox" placeholder="Password" type="password"
                onChange={(e) => setPassword(e.target.value)} value={password} />

            <button className="submit-button" type="button" onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;