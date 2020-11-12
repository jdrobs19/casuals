const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/config');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const morgan = require('morgan');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Secret secret Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(morgan('dev'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`app now running on http://localhost:${PORT}/`);
    })
});