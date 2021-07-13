const express = require('express')
const mainRouter = require('./routes/main')
const app = express()
const port = 3000

app.use(express.static('public'));

// Rutas
app.use('/', mainRouter);

app.listen(port, () => console.log(`On in http://127.0.0.1:${port}`))