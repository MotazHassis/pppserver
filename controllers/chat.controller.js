const { Wing } = require('../models/chat.model');
const { response } = require('express');//test

const readings={
    'right':90,
    'left':90,
    'speed':1000,
    'rear':60,
    'vertical':90
    
}

module.exports.getreadings = (req, response) =>{
    return response.json(readings)
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

module.exports.updatespeed = (req, response) =>{
    const {speed} = req.body
    readings.speed=speed;
    return response.json()
}

module.exports.updaterear = (req, response) =>{
    const {rear} = req.body
    readings.rear=rear;
    return response.json()
}
module.exports.updatevertical = (req, response) =>{
    const {vertical} = req.body
    readings.vertical=vertical;
    return response.json()
}
module.exports.updatebalance = (req, response) =>{
    const {left,right} = req.body
    readings.left=left;
    readings.right=right;
    return response.json()
}






