import React, { useState, useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('http://localhost:3000/');
        } else {
            setLoading(false);
        }
    } ,[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {}
        data.email = email
        data.password = password
        const url = 'http://localhost:8000/accounts/auth/login/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            const returnedKey = await response.json()
            localStorage.clear()
            localStorage.setItem('token', returnedKey.key)
            window.location.replace('http://localhost:3000/');
        } else {
            setEmail('');
            setPassword('');
            localStorage.clear();
            setErrors(true);
            alert("Cannot log in with the provided credentials")
        }
    }

    return (
        <div>
            {loading === false && <h1 style={{fontStyle:"normal",fontWeight:"700",fontSize:"40px",lineHeight:"48px"}}>Login</h1>}
            {errors === true}
            {loading === false && (
                <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        type="email"
                        name="email"
                        className="form-control"
                        />
                        <label style={{color:"black"}}>Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        type="password"
                        name="password"
                        className="form-control"
                        />
                        <label style={{color:"black"}}>Password</label>
                </div>
                <button className="btn btn-primary">Login</button>
              </form>
            )}
        </div>
    )



}

export default Login
