import config from './config/config.js';

import app from './app.js';
import './database.js';


app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});




//comando para correr el servidor
// npm run dev == desarrollo
// npm run prod == produccion