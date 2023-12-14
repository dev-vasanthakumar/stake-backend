const mongoose = require("mongoose");


const stakeHistorySchema = new mongoose.Schema({
    planId: {
      type: String,
      required: true, 
    }, 
    userId: {
      type: String,
      required: true,
    },
    amount: {
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
    totalRewardAmount: {
      type: Number,
      required: true,
    },
    claimedAmount: {
      type: Number,
      default: 0,
    },
    status: {
      type: Boolean,
      default: true // active - true, expired - false
    },  
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
    },
    
  },{collection: "stake history"});
  
  const stakeHistory = mongoose.model("Stake History", stakeHistorySchema);
  
  module.exports = stakeHistory;