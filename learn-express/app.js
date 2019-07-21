const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
//const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Initializes Middleware for logging
//app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index'))

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));