import React, { useState } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';
import api from '../services/api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    await api.post('/auth/register', { username, password });
    alert('Registration successfully completed!');
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, margin: '50px auto', padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>Register</Typography>
      <TextField label="Username" fullWidth margin="normal" onChange={e => setUsername(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" fullWidth onClick={handleRegister} sx={{ mt: 2 }}>
        Register
      </Button>
    </Paper>
  );
}

export default Register;