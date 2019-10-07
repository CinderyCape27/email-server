const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// importing routes 
const routerIndex = require('./routes/routes');


// Initializations
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/', routerIndex);
// Server listening
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

