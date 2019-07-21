const express = require('express');
const app = express();
//const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000;

// Initializes Middleware for logging
//app.use(logger);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));