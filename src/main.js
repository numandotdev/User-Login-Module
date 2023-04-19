const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/*', (req, res) => {
    res.status(200).send("Hey, you're running an express api")
})
app.post('/user-login', (req, res) => {
    
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))