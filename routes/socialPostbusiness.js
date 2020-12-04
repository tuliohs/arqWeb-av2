const express = require('express')
const router = express.Router()
const socialController = require("../controllers/socialController")
const middlewares = require('../middlewares/social')

router.patch('/:id', middlewares.getSocialPostId, socialController.postar)
module.exports = router