import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigating after login
import './Login.css'; // You can style this with CSS

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/loginuser', { email, password });
      if (response.data.success) {
        setMessage('Login successful');
        console.log('User data:', response.data.data);

        // Store the JWT in localStorage
        localStorage.setItem("authToken", response.data.authToken);

        // Navigate to the home page on successful login
        navigate("/");
      } else {
        setMessage('User does not exist');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Incorrect password');
      } else {
        setMessage('Error logging in');
      }
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
