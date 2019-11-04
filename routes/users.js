const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// User Model
const User = require('../models/User');

//@route  Post /api/users
//@desc   Register a user
//@access Public

router.post('/', [
    check('name', 'Please enter you name!').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter password at least 6 charachters long').isLength({min:6})
], async(req,res) => {
    
    //Find validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {name,email,password} = req.body;

    try {
        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({msg: "User already exsists."})
        }
        user = new User({
            name,
            email,
            password
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)

        user.save()

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtsecret'), {
            expiresIn: 3600
        }, (err,token) => {
            if(err) throw err;
            res.json({token})
        })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
 
})

module.exports = router;