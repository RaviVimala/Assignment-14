import React, { useState } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';
import api from '../services/api';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      onLogin();
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, margin: '50px auto', padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>Login</Typography>
      <TextField label="Username" fullWidth margin="normal" onChange={e => setUsername(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
        Login
      </Button>
    </Paper>
  );
}

export default Login;