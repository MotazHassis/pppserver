const { Wing } = require('../models/chat.model');
const { response } = require('express');//test

const readings={
    'right':0,
    'left':0,
    
}

module.exports.updatereading = (req, response) =>{
    const {right,left} = req.body
    readings.left=left;
    readings.right=right;
    return response.json()
}

module.exports.getreadings = (req, response) =>{
    return response.json(readings)
}

module.exports.createWing = (request, response) => {
    const {right,left} = request.body;
    console.log('reach create method')
    Wing.create({
        right,left
    })
        .then(thiswing => response.json(thiswing))
        .catch(err => response.status(400).json(err));
}


module.exports.updatewing = (req, response) =>{
    const {right,left} = req.body
    Wing.findOneAndUpdate(
        { _id: req.params.id },
        { right: right,left: left },
        { new: true}
    )
    .then(thiswing => response.json(thiswing))
    .catch(err => response.status(400).json(err));
    }


module.exports.findwing = (req, response) =>{
    Wing.findOne({_id:req.params.id})
        .then(thiswing => response.json(thiswing))
        .catch(err => response.status(400).json(err))
}




