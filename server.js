const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/config');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`app now running on http://localhost:${PORT}/`);
    })
});