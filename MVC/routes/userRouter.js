const express = require('express');
const router = require('express').Router();
const usersController= require('../controllers/userController.js');
const csrfController = require('../controllers/csrfController.js');
const loginController = require('../controllers/loginController.js');
const verifyToken = require('../middleware/verifyToken.js');



// Routes
router.get('/test', function(req, res) {
    res.send('Hello ........');
});

router.get('/getAllUsers',usersController.getAllUsers);
router.post('/createUser', usersController.createUser);
router.get('/getUser/:id', usersController.getUser);
router.put('/updateUser/:id', usersController.updateUser);
router.delete('/deleteUser/:id', usersController.deleteUser);

//jwt token routes
router.post('/login', loginController.login);
router.get('/protected', verifyToken, loginController.protected);

//csrf token routes
router.get('/csrf', csrfController.csrf);
router.post('/submit', csrfController.submit);




module.exports = router;

