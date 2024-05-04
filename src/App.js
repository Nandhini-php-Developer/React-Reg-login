import React , {useState} from 'react'
import Register from './Components/Register'
import Login  from './Components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [registeredEmail, setRegisteredEmail] = useState('');

  const handleRegister = (email) => {
    // Store the registered email in state
    setRegisteredEmail(email);
  };
  return (
    <Router>
    <div>
        <center><h1>Register/Login Form</h1></center>
        <Routes>
          <Route path="/" element={<Register onRegister={handleRegister} />} />
          <Route path="/login" element={<Login registeredEmail={registeredEmail} />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App
