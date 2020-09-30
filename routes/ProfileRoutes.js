const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const profileController = require('../controller/profileController');
const profileSchema=require('../apiSchema/profileSchema');

module.exports = router;

router.post('/profileadd',joiSchemaValidation.validateBody(profileSchema.profileAdd),
profileController.ProfileAdd
);

router.post('/profileupdate',joiSchemaValidation.validateBody(profileSchema.profileUpdate),
profileController.ProfileUpdate
);

