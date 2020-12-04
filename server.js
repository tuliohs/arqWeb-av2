// configurar variáveis de ambiente
require('dotenv').config()
// configurar o express
const express = require('express')
const app = express()

// logging
const morgan = require('morgan')
app.use(morgan(':method :url: :status :res[content-length] - :response-time ms'))
// monitoramento
app.use(require('express-status-monitor')())

/*
FORMA DE CONEXÃO ATLAS CLOUD
// configurar acesso a banco mongodb
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Mongo DB'))
*/

//FORMA DE CONEXÃO LOCAL ON-PREMISSEn
const db = require("./databases");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.use(express.json())

const alunoRouter = require('./routes/aluno')
app.use('/v1/aluno', alunoRouter)

const socialPost = require('./routes/socialPost')
app.use('/v1/socialPost', socialPost)

app.listen(3000, () => console.log('Server started.'))