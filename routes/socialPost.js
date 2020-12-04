const express = require('express')
const router = express.Router()

const socialController = require("../controllers/socialController")
const middlewares = require('../middlewares/social')

router.get('/:id', middlewares.getSocialPostId, socialController.defaultGet)

router.get('/user/:userId', middlewares.getSocialPostUserId, socialController.defaultGet)

router.post('/', socialController.criarPost)

router.patch('/:id', middlewares.getSocialPostId, socialController.updateSocial)

router.delete('/:id', middlewares.getSocialPostId, socialController.delSocial)

module.exports = router