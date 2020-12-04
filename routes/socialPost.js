const express = require('express')
const router = express.Router()

const socialController = require("../controllers/socialController")
const middlewares = require('../middlewares/social')

router.get('/:id', middlewares.getSocialPostId, socialController.getById)

router.get('/:userId', middlewares.getSocialPostUserId, socialController.getByUserId)

router.post('/', socialController.criarPost)

router.patch('/:id', middlewares.getSocialPostId, socialController.updateSocial)

router.delete('/:id', middlewares.getSocialPostId, socialController.delSocial)

module.exports = router