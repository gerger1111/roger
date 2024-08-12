// src/pages/Login.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); // Redirect to the Home page after "login"
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <img 
          src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/449997625_7580947945343232_7133370854915843497_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEILNZOyp5XEjtFgvRNllXKiQr209aYZRqJCvbT1phlGkVaJGynFCjNX-MpkK5TNA7-nKip0mBpqYMHkGLh2t1h&_nc_ohc=ChHzZ0Idtd0Q7kNvgF3CvWp&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QHr7dObhQaL-ZUumo6g3zLgvDL-ohMXwjro19KA6QWPLg&oe=66DD5EB4"
          alt="Profile" 
          className="profile-image2" 
        />
        <h1 className="display-4" style={{ color: 'white' }}>Welcome to My Portfolio</h1>
        <button onClick={handleLogin} className="btn btn-primary btn-lg">
          Enter
        </button>
      </div>
    </div>
  );
}

export default Login;
