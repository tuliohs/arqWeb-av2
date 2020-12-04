const express = require('express')
const router = express.Router()
const socialController = require("../controllers/socialController")

router.post('/', socialController.criarPost)
module.exports = router