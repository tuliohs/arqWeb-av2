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

const socialPostBusiness = require('./routes/socialPostbusiness')
app.use('/v1/socialPostbusiness', socialPostBusiness)


app.listen(3000, () => console.log('Server started.'))