const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
	res.send('Hello, Docker !');
});

app.listen(PORT, () => {
	console.log(`Server is running on https://localhost:${PORT}`);
});
