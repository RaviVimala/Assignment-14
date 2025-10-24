import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Register from './components/Register';
import Login from './components/Login';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          {/* <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MERN Integration
          </Typography> */}

          <h1>kalskdjflkjadf  </h1>
          {!loggedIn ? (
            <>
              <Button color="inherit" href="/">Register</Button>
              <Button color="inherit" href="/login">Login</Button>
            </>
          ) : (
            <>
              <Button color="inherit" href="/customers">Customers</Button>
              <Button color="inherit" href="/add">Add Customer</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
        <Route path="/customers" element={loggedIn ? <CustomerList /> : <Login onLogin={() => setLoggedIn(true)} />} />
        <Route path="/add" element={loggedIn ? <AddCustomer /> : <Login onLogin={() => setLoggedIn(true)} />} />
      </Routes>
    </Router>
  );
}

export default App;
