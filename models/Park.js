const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const RideSchema = new Schema({
    name: String,
    image: String,
    ride: {
        type: String,
        enum: ['Roller Coaster', 'Bumper Cars', 'Bungee  Jumps', 'Ferris Wheel', 'Tilt-A-Whir'],
    }
}, { timestamps: true
})

const FoodSchema = new Schema({
    name: String,
    description: String,
}, { timestamps: true
})

const ParkSchema = new Schema({
    name: String,
    image: String,
    rides: [RideSchema],
    food: [FoodSchema]
}, { timestamps: true });

module.exports = mongoose.model("Park", ParkSchema);