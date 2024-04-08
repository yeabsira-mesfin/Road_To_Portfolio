const express = require('express');
const router = express.Router();

//Exporting the router variable

router.get('/', (req,res) => {
    res.status(200).json({message: 'Get goals',name:'Yeabsira'});
});

router.post('/', (req,res) => {
    res.status(200).json({message: 'Set goals',name:'Yeabsira'});
});

router.put('/:id', (req,res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`,name:'Yeabsira'});
});

router.delete('/:id', (req,res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`,name:'Yeabsira'});
});

module.exports = router;

