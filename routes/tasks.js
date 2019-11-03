const express = require('express');
const router = express.Router();

//@route  GET /api/tasks
//@desc   Get all tasks of logged in user
//@access Private

router.get('/', (req,res) => {
    res.send('Get all tasks of logged in user');
})

//@route  Post /api/taks
//@desc   Add new task
//@access Public

router.post('/', (req,res) => {
    res.send('Add a new task')
})


//@route  Put /api/taks/:id
//@desc   update a task
//@access Private

router.put('/:id', (req,res) => {
    res.send('Update a task')
})


//@route  Delete /api/taks/:id
//@desc   Delete a task
//@access Private

router.delete('/:id', (req,res) => {
    res.send('Delete a task')
})

module.exports = router;