
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [username, setUsername] = useState('')
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const pass = useRef();

  const Eye = <FontAwesomeIcon className="icon" icon={faEye} />
  const EyeSlash = <FontAwesomeIcon className="icon" icon ={faEyeSlash} />

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {}
    data.email = email
    data.username = username
    data.password1 = password1
    data.password2 = password1

    const url = 'http://localhost:8000/accounts/auth/register/'
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
        window.location.replace('http://localhost:3000/')
    } else {
        setEmail('')
        setUsername('')
        setPassword1('')
        localStorage.clear()
        setErrors(true)
        alert("Cannot sign up with the provided credentials")
    }
    }

    const showPassword = () =>{
      setShow(!show)
      pass.current.type = show ? 'password':'text';

      }

    return (
        <div>
          {loading === false && <h1 style={{fontStyle:"normal",fontWeight:"700",fontSize:"40px",lineHeight:"48px"}}>Sign up</h1>}
          {errors === true}
          <form onSubmit={onSubmit}>
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
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                  type="username"
                  name="username"
                  className="form-control"
                  />
                <label style={{color:"black"}}>Username</label>
              </div>
              <div className="form-floating mb-3 eye">
                <input
                  ref={pass}
                  value={password1}
                  onChange={e => setPassword1(e.target.value)}
                  required
                  type="password"
                  name="password"
                  className="form-control"
                />
                {show ? <i onClick={showPassword}>{Eye}</i>:<i onClick={showPassword}>{EyeSlash}</i>}
                <label style={{color:"black"}}>Password</label>
              </div>
              <button className="btn btn-primary">Sign up</button>
          </form>
        </div>
      );
}

export default Signup
