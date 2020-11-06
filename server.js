require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3006;

const app = express();
const sequelize = require('./config/config');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(require('./routes/htmlRoutes'));

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, ()=> {
        console.log(`app now running on http://localhost:${PORT}/`);
    })
})