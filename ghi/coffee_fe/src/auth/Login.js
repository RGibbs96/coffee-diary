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
        console.log(data)
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
        }
    }

    return (
        <div>
            {loading === false && <h1>Login</h1>}
            {errors === true && <h2>Cannot log in with the provided credentials</h2>}
            {loading === false && (
                <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email address:</label> <br />
                <input
                  name='email'
                  type='email'
                  value={email}
                  required
                  onChange={e => setEmail(e.target.value)}
                />{' '}
                <br />
                <label htmlFor='password'>Password:</label> <br />
                <input
                  name='password'
                  type='password'
                  value={password}
                  required
                  onChange={e => setPassword(e.target.value)}
                />{' '}
                <br />
                <input type='submit' value='Login' />
              </form>
            )}
        </div>
    )



}

export default Login
