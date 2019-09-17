const express = require('express')
const hbs     = require('hbs');
const path    = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const signinRouter = require('./routes/signin');

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/signin', signinRouter);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/inverte-v2', {useNewUrlParser: true, useUnifiedTopology: true})



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))