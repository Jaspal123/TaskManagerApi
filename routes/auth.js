const express = require('express');
const router = express.Router();

//@route  GET /api/auth
//@desc   Get logged in user
//@access Private

router.get('/', (req,res) => {
    res.send('Get Logged in user');
})

//@route  Post /api/auth
//@desc   Login the user
//@access Public

router.post('/', (req,res) => {
    res.send('Login a user')
})

module.exports = router;