const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const tranroutes =require ('./routes/tranRoutes');

const app = express();


connectDB();


app.use(bodyParser.json());


app.use('/api', userRoutes);
app.use('/api/data',tranroutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
