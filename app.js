const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'Smaitic Node API Running'
    });
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});