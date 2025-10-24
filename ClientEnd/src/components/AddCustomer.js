import React, { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import api from '../services/api';

function AddCustomer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddCustomer = async () => {
    const token = localStorage.getItem('token');
    try {
      await api.post('/customers', { name, email, phone }, { headers: { Authorization: `Bearer ${token}` } });
      alert('Customer added successfully');
      setName('');
      setEmail('');
      setPhone('');
    } catch {
      alert('Failed to add customer');
    }
  };

  return (
    <Paper sx={{ maxWidth: 600, margin: '30px auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>Add Customer</Typography>
      <TextField label="Name" fullWidth margin="normal" value={name} onChange={e => setName(e.target.value)} />
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField label="Phone" fullWidth margin="normal" value={phone} onChange={e => setPhone(e.target.value)} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleAddCustomer}>
        Add Customer
      </Button>
    </Paper>
  );
}

export default AddCustomer;