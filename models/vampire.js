const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true, 
        }, 
        hair_color: {
            type: String, 
            default: 'blonde', 
     },
        eye_color: String, 
        dob: Date, 
        loves: [String], 
        location: String, 
        gender: String,
        victims: {
            type: Number,
            min: 1, 
        },
    }, {
        timestamps: true,
        }

)

module.exports = mongoose.model('Vampires', vampireSchema); 