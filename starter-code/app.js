//Did you use npm install to
//add all these packages
//to our project?
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// How do we 'require' the candyRouter file?
const candyRouter = require('./candyRouter.js');

app.use(bodyParser.json());

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candies', candyRouter);

app.listen(port, function() {
	console.log('Server starter on ', port);
});