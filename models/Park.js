const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const ParkSchema = new Schema({
    name: String,
    image: String,
    rides: [{
        type: String,
        enum: ['Roller Coaster', 'Bumper Cars', 'Bungee  Jumps', 'Ferris Wheel', 'Tilt-A-Whir'],
    }]
}, { timestamps: true });

module.exports = mongoose.model("Park", ParkSchema)
