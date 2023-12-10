const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api-key', (req, res) => {
    const config = require('./config');
    res.json({ apiKey: config.CHATGPT_API_KEY });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
