const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./users.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
//app.use(express.json());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', usersRoutes);
//app.use(cookieParser());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

const allowedOrigins = require('./allowedOrigins.js')

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.listen(3300, () => {
    console.log('Server is now listening on port 3300');
});