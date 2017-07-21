const express = require('express');
const bodyParser = require('body-parser');
const candyRouter = express.Router();

//What would need to go into candies
//in order to pass our first test?

// candies
const candies = [
	{ 
		id: 1,
		name: "Chewing Gum",
		color: "Red"
	},
	{ 
		id: 2,
		name: "Pez",
		color: "Green"
	},
	{ 
		id: 3,
		name: "Marshmallow",
		color: "Pink"
	},
	{ 
		id: 4,
		name: "Candy Stick",
		color: "Blue"
	}
];

candyRouter.get('/', function(req, res) {
	// INDEX
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.send(candies);
});

// Fill out the rest of the routes here
candyRouter.get('/:id', function(req, res) {
	// SHOW
	res.send(candies[req.params.id-1]);
});

candyRouter.post('/', function(req, res) {
	// CREATE
	candies.push(req.body);
	console.log(req.body);
	res.send(req.body);
});

candyRouter.put('/:id', function(req, res) {
	// UPDATE//
	candies[req.params.id-1] = req.body;
	res.send(req.body);
	//res.send(candies[req.params.id-1] = req.body);
});

candyRouter.delete('/:id', function(req, res) {
	// DELETE
	candies.splice(req.params.id-1, 1);
	res.send(req.body);
});

module.exports = candyRouter;