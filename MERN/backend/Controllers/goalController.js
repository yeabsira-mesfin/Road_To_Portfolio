const asyncHandler = require('express-async-handler')
// @desc Get goals
// @route GET /apai/goals
// @access Private

const getGoals =asyncHandler( async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({Message: 'Get goals'})
})
// @desc POST goals
// @route POST /apai/goals
// @access Private

const postGoal = asyncHandler (async (req,res) => {
    res.status(200).json({Message: 'Set goals'})
})
// @desc Update goals
// @route PUT /apai/goals/:id
// @access Private

const updateGoal = asyncHandler ( async (req,res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`,name:'Yeabsira'});
})
// @desc Update goals
// @route PUT /apai/goals/:id
// @access Private

const deleteGoal = asyncHandler ( async (req,res) => {
    res.status(200).json({message: `Delte goals ${req.params.id}`,name:'Yeabsira'});
})

module.exports = {
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}