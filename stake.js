var express = require("express");
var router = express.Router();

const stakeController = require('../controller/stakeController');

router.get('/plans', stakeController.getPlans)
router.post('/buyPlan', stakeController.purchasePlan)
router.get('/myPlans', stakeController.myPlans)


module.exports = router;