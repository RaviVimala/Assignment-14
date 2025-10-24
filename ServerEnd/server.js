const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

//Assigning the express function to app
const app = express();

//parser including 
app.use(cors());
app.use(express.json());

//Database Connection
mongoose.connect("mongodb://localhost:27017/")
.then(() => console.log("Database Connected Success"))
.catch( err => console.log("Mongo DB Connection Error", err));

app.use('/api/authority', require('./routes/authority'));
app.use('/api/customers', require('./routes/customers'));

//Server connected to the PORT
const PORT = 4000 || 5000;
app.listen(PORT, () => console.log(`Server is Connected on the Port No : ${PORT}` ));