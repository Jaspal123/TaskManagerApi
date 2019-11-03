const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.json({msg: 'Welcome To Task Manager App'})
})

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));