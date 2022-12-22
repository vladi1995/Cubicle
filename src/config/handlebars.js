const handlebars = require('express-handlebars');

module.exports = (app) => {
//Configure handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs', //hbs extension for the main
}));

//hbs extension for the views
app.set('view engine', 'hbs');

//change root for the views
app.set('views', './src/views');
}
