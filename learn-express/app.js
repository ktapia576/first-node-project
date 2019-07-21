const express = require('express');
const app = express();
//const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Initializes Middleware for logging
//app.use(logger);

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));