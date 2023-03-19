const express = require('express')
const axios = require("axios");
const cors = require('cors');

const port = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(cors());

/* TODO: Replace this with your own API key */
const API_KEY = '________'

app.get("/apod-for-date", async function (req, res) {
	const date = req.query.date;

	/* TODO for Task 1: Make an API call to NASA's APOD API to get the APOD for the given date */
	axios.get(________)
		.then(body => res.json({ name: ______, url: ______, date: ______ }));
});

app.get("/apods-for-april", function (req, res) {
	const start_date = "2022-04-01";
	const end_date = __________;

	/* TODO for Task 2: Make an API call to NASA's APOD API to get all the APOD images for April 2022 */
});

app.get("/apods-for-month", function (req, res) {

	/* TODO for Task 3: Make an API call to NASA's APOD API to get all the APOD images for the specified month and year */

});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});