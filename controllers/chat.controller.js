const { Wing } = require('../models/chat.model');
const { response } = require('express');//test

const readings={
    'right':0,
    'left':0,
    
}

module.exports.updatereadingleft = (req, response) =>{
    const {left} = req.body
    readings.left=left;
    return response.json()
}

module.exports.updatereadingright = (req, response) =>{
    const {right} = req.body
    readings.right=right;
    return response.json()
}

module.exports.getreadings = (req, response) =>{
    return response.json(readings)
}




