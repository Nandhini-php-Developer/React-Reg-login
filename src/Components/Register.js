import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [registeredUsername, setRegisteredUsername] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password) {
      setMessage('Registration successful!');
      setRegisteredUsername(formData.username);
      onRegister(formData.email); 

    } else {
      setMessage('Please fill in all fields.');
      setRegisteredUsername(''); 
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input className="input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <button className="button" type="submit">Register</button>
      </form>
      {registeredUsername && <p>Registered username: {registeredUsername}</p>}
      <p className="message error">{message}</p>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
