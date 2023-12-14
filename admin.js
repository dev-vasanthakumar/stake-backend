var express = require("express");
var router = express.Router();

const adminController = require('../controller/adminController');

router.post("/contents", adminController.contents);
router.get("/getContents", adminController.getContents);
router.get("/getContent/:id", adminController.getContent);
router.get ("/getsingleuser/:id", adminController.getsingleuser)
router.post("/updatecontent/:id", adminController.updatecontent);
router.get('/registerSingledata/:id', adminController.registerSingledata);
router.post('/', adminController.post);



router.post("/setNewPassword", adminController.setNewPassword);
router.post('/changePassword', adminController.changePassword);
router.post ('/handleAdminLoginVerify', adminController.handleAdminLoginVerify)
router.post ('/generateTwoFactorCode', adminController.generateTwoFactorCode)

router.post ('/disableTwoFactorAuthentication', adminController.disableTwoFactorAuthentication);
router.post("/verifyemail", adminController.verifyemail);
router.post("/forgotPattern", adminController.forgotPattern)
router.post("/oldPattern", adminController.oldPattern);
router.post ("/newPattern", adminController.newPattern);
router.post('/loginTwoFactorVerify', adminController.loginTwoFactorVerify)

router.post('/kycList', adminController.kycList)
router.get("/singleKycData/:id", adminController.singleKycData )
router.post('/KycApprove', adminController.KycApprove)
router.post('/KycReject', adminController.KycReject)

router.post('/addPlan', adminController.addPlan)


module.exports = router;