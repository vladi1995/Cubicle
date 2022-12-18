//Express, handlebars
const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes');

//Initialize app
const app = express();
//Configure static files
app.use('/static', express.static('public'));

//Configure handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs', //hbs extension for the main
}));

//hbs extension for the views
app.set('view engine', 'hbs');

//change root for the views
app.set('views', './src/views');

app.use(routes);
app.listen(5000, () => console.log(`App is listening on port 5000`));