const express = require('express');
const router = require('./controller/routeController')
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use('/api',cors(), router);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});

module.exports = app;
