const express = require('express');
const connectDB = require('./config/db');


const app = express();

// Connect to database
connectDB();



app.get('/', (req,res) => {
    res.json({msg: 'Welcome To Task Manager App'})
})

// Define Routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/tasks', require('./routes/tasks'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));