const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require("morgan"); 
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./services/db/db');
require('dotenv').config();
const app = express();

const envPath = path.join(__dirname, 'config.env'); 
const result = dotenv.config({ path: envPath });
if (result.error) {
    throw result.error;
}

const PORT = process.env.PORT || 3000;

//middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(session({
    name: 'EmailSession',
    secret: process.env.SESSION_SECRET,
    secure: true,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URI
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

connectDB();

app.get('/server',(req,res)=>{
    res.send("Express Welcomes You to its Server");
})


//build
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

//route
app.use('/',require('./services/routes/routes'));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
