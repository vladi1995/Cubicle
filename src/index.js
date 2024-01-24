const express = require('express');

const routes = require('./routes');
const config = require('./config/config');
const setupViewEngine = require('./config/viewEngine');
const databaseInit = require('./config/databaseInit');

const app = express();
setupViewEngine(app);

app.use(express.static('./src/static'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

databaseInit()
    .then(() => app.listen(config.PORT, () => console.log(`App is listening on port ${config.PORT}`)))
    .catch((err) => console.error(err.message));

