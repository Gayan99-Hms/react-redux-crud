const express = require('express');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  })
);



app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

