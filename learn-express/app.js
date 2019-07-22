const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const members = require('./Members');
//const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Initializes Middleware for logging
//app.use(logger);

// Handlebars Middleware, exphbs() allows to change options/config
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Home page route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}))

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));