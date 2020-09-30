const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const userController = require('../controller/userController');
const userSchema = require('../apischema/userSchema');

module.exports = router;

router.post('/signup', joiSchemaValidation.validateBody(userSchema.signup),
userController.Signup
);

router.post('/signin', joiSchemaValidation.validateBody(userSchema.signin),
userController.Signin
);
