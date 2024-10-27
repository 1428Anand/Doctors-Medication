const express = require('express');
const controller = require('../controllers/usercontroller');
const router = express.Router();
router.put('/updateprofile/(:id)',controller.uploadimg,controller.updateprofile);
router.post('/pregistration',controller.pregistration);
router.post('/login',controller.login);
router.post('/plogin',controller.plogin);
router.post('/storedata',controller.storedata);
router.get('/querylist',controller.querylist);
router.get('/doclist',controller.doclist);
router.get('/plist/(:docid)',controller.plist);
router.get('/singledrlist/(:id)',controller.singledrlist);
router.get('/singleplist/(:mobile)',controller.singleplist);
router.get('/singlequery/(:id)',controller.singlequery);
router.put('/updatequery/(:id)',controller.updatequery);
router.get('/totalpatient/(:docid)',controller.totalpatient);

module.exports = router;