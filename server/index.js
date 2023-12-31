const axios = require('axios');
const loadDb = require('./src/loadDB');
const server = require('./src/server');
const { conn } = require('./src/db.js');
const PORT = 3001;

conn
	.sync({ force: false })
	.then(async () => {
		await loadDb();
		server.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	})
	.catch((error) => console.error(error));
