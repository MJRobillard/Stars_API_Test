const express = require('express')
const axios = require("axios");
const cors = require('cors');

const port = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(cors());

/* TODO: Replace this with your own API key */
const API_KEY = '8CFjnukGkLp6j0Hu6PEHYJHucMmLAttyaSJEOWJv'

app.get("/apod-for-date", async function (req, res) {
	const date = req.query.date;

	/* TODO for Task 1: Make an API call to NASA's APOD API to get the APOD for the given date */
	axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
		.then(response => res.json({ name: response.data.title, url: response.data.url, date: response.data.date }));
});

app.get("/apods-for-april", function (req, res) {
	const start_date = "2022-04-01";
	const end_date = "2022-04-30";

	axios.get(`https://api.nasa.gov/planetary/apod?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`)
		.then(response => res.json(response.data));});


app.get("/apods-for-month", function (req, res) {
	const year = req.query.year;
	const month = req.query.month;

	const start_date = `${year}-${month}-01`;
	const end_date = `${year}-${month}-${new Date(year, month, 0).getDate()}`;

	axios.get(`https://api.nasa.gov/planetary/apod?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`)
		.then(response => res.json(response.data));
});
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});