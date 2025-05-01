const express = require('express');
const cors = require('cors');
require('dotenv').config();

const config = require('./config');
const server = require('./config/server')
const authRoute = require('./routes/authRoute');


const app = express();


app.use(cors());
app.use(express.json());

config.database(); //sử dụng function connectDB() từ config/database.js

app.use('/api',authRoute);

app.get('/', (req,res)=>{
  res.send('Server CheapTrip đang chạy');
});

app.listen(server.PORT, () =>{
  console.log(`Auth-Service đang lắng nghe tại http://localhost: ${server.PORT}`);
});