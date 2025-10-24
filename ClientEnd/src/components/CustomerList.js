import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import api from '../services/api';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    api.get('/customers', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setCustomers(res.data))
      .catch(() => alert('Failed to fetch customers'));
  }, []);

  return (
    <Paper sx={{ maxWidth: 600, margin: '30px auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>Customers</Typography>
      <List>
        {customers.map(customer => (
          <React.Fragment key={customer._id}>
            <ListItem>
              <ListItemText primary={customer.name} secondary={`${customer.email} | ${customer.phone}`} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default CustomerList;