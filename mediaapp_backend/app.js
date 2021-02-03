const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/users-routes')
const placesRoutes = require('./routes/places-routes');
const HttpError = require('./models/http-error')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorizaton');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    next();
});

app.use('/api/places', placesRoutes);

app.use('/api/users', userRoutes);

// only runs if we didn't send a response in one of our routes before
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404)
    throw error;
})

// Error Handling Middleware
app.use((error, req, res, next) => {
    if(req.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occured!"});
});

mongoose
    .connect('mongodb+srv://jayarredondo:jawesome123@cluster0.wtxcw.mongodb.net/mern?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err)
    });