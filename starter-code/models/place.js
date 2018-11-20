const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: { type: String, unique: true },
    type: { type: String, enum: ['coffee shop, bookstore'] }
},
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        }
    });

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;