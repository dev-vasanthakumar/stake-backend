const bcrypt = require("bcrypt");
const User = require("../model/schema");
const Plan = require("../model/planSchema");
var jwt = require("jsonwebtoken");
const { upload } = require("../mutar/multar");
const path = require("path");
const { verifyToken } = require("../middleware/verifyToken");
const speakEasy = require("@levminer/speakeasy");
// require('dotenv').config()
const qrCode = require("qrcode");
const planSchema = require("../model/planSchema");
const stakeHistory = require("../model/stakeHistorySchema");

exports.getPlans = (req, res, next) => {
  try {
    Plan.find({})
      .then((data) => res.json({ data }))
      .catch((err) => res.json(err));
  } catch (error) {
    console.log(error);
  }
};

exports.purchasePlan = async (req, res) => {
  try {
    const {userId, planId, amount ,currency, fee, } = req.body;
    if (!planId) {
      return res.status(400).json({ message: "Plan ID is required!" });
    }

    const plan = await planSchema.findOne({ _id: planId });
    if (!plan) {
      return res.status(400).json({ message: "Incorrect plan ID" });
    }
console.log(plan)

    await stakeHistory.create({
      userId,
      planId,
      amount,
      currency,
      lifeSpan: plan.lifeSpan,
      durationInDays: plan.durationInDays,
      fee,
      rewardPercentage: plan.rewardPercentage,
      totalRewardAmount: (plan.rewardPercentage / 100) * amount
    });
    res.status(200).json({ message: "Plan purchased successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error occurred in plan purchase", error: err });
  }
};


exports.myPlans = (req, res, next) => {
  try {

    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    stakeHistory.find({ userId })
      .then((data) => res.json({ data }))
      .catch((err) => res.json(err));
  } catch (error) {
    console.log(error);
  }
};