const mongoose = require('mongoose');

const Schema = mongoose.Schema

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  created_date: {
    type: Date,
    default: Date.now
  },
})

// a setter
FoodSchema.path('name').set((inputString) => {
  return inputString[0].toUpperCase() + inputString.slice()
})

module.exports = mongoose.model('Category', FoodSchema)
