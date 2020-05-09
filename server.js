const express = require('express');
const path = require('path')
const ms = require('ms');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/api', (req, res) => {
    res.json({ id: 1 })
});
app.listen(3000, () => {
    console.log('listen in 3000')
})