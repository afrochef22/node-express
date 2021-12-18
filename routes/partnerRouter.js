const express = require("express");
const partnerRouter = express.Router();

partnerRouter
	.route("/")
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader("Content-type", "text/plain");
		next();
	})

	.get((req, res) => {
		res.end("Will send all the partners to you.");
	})

	.post((req, res) => {
		res.end(
			`Will add the partner: ${req.body.name} with the description: ${req.body.description}.`
		);
	})

	.put((req, res) => {
		res.statusCode = 403;
		res.end("PUT operations not supported on /partners.");
	})

	.delete((req, res) => {
		res.end("Deleting all partners.");
	});

partnerRouter
	.route("/:partnerId")
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader("Content-type", "text/plain");
		next();
	})
	.get((req, res) => {
		res.end(
			`Will send you the partner: ${req.body.name} and the discription for ${req.body.description}`
		);
	})

	.post((req, res) => {
		res.statusCode = 403;
		res.end(
			`POST operation not supported on /partners/${req.params.partnerId}`
		);
	})

	.put((req, res) => {
		res.write(`Updating the partner: ${req.params.partnerId}\n`);
		res.end(`Will update the partner: ${req.body.name}
        with description: ${req.body.description}`);
	})

	.delete((req, res) => {
		res.end(`Deleting partner: ${req.params.partnerId}`);
	});

module.exports = partnerRouter;