const express = require('express');
const app = express();
const routerRicardo = require('./routers/index.js');

app.use('/', routerRicardo);

const PORT  = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is listening in the port ${PORT}...`);
})
