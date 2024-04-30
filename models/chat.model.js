
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WingSchema = new Schema({
    right: {
        type: Number
    },
    left: {
        type: Number
    }
    }
    ,{ timestamps: true });

const Wing = mongoose.model('Wing', WingSchema);

module.exports ={Wing,WingSchema}
