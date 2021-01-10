import polka from "polka";

const app = polka();

app.get("/", (req, res) => {
	res.end("Hello Docker!");
});

app.listen(3000, (err) => {
	if (err) {
		throw err;
	}

	console.log("Listening on http://localhost:3000/");
});
