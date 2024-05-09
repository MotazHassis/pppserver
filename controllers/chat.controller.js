const { Wing } = require('../models/chat.model');
const { response } = require('express');//test

const readings={
    'right':0,
    'left':0,
    'speed':0,
    'rear':0,
    
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
module.exports.updatebalance = (req, response) =>{
    const {left,right} = req.body
    readings.left=left;
    readings.right=right;
    return response.json()
}






