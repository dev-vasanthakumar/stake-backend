const mongoose = require("mongoose");


const planSchema = new mongoose.Schema({
    planName: {
      type: String,
      required: true,
      unique: true,
    },
    minimumAmount: {
      type: Number,
      required: true,
    },
    lifeSpan: {
      type: String,
      required: true,
    },
    durationInDays: {
      type: Number,
      required: true,
    },
    rewardPercentage: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: false
    },  
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
    },
    
  },{collection: "plan"});
  
  const Plan = mongoose.model("Plan", planSchema);
  
  module.exports = Plan;