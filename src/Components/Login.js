import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login({ registeredEmail }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [loginUsername, setLoginusername] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.email && formData.password) {
        if (formData.email === registeredEmail && formData.password) {
            setMessage('Login successful!');
            setLoginusername(formData.email);
        }else{
            setMessage('Login failed enter valid username!.');
        }

    } else {
      setMessage('Please fill in all fields.');
      setLoginusername('');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input className="input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <button className="button" type="submit">Login</button>
      </form>
      {loginUsername && <p>Welcome : {loginUsername}</p>}
      <p className="message error">{message}</p>
      <p>Don't have an account? <Link to="/">Register</Link></p>
    </div>
  );
}

export default Login;
