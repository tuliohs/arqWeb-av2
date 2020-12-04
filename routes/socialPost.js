const express = require('express')
const router = express.Router()

const social = require("../controllers/socialController")




// obter post por ID
//router.get('/:id', getSocialPostId, async (req, res) => {
//    res.json(res.socialPost)
//})

//// obter posts por userId
//router.get('/:userId', getSocialPostUserId, async (req, res) => {
//    res.json(res.socialPost)
//})


router.post('/', social.criarPost)

// PATCH update
//router.patch('/:id', getSocialPostId, async (req, res) => {
//    if (req.body.foto) { res.socialPost.foto = req.body.foto }
//    if (req.body.status) { res.socialPost.status = req.body.status }
//    if (req.body.dataDeCriacao) { res.socialPost.dataDeCriacao = req.body.dataDeCriacao }
//    if (req.body.dataDeModificacao) { res.socialPost.dataDeModificacao = req.body.dataDeModificacao }

//    try {
//        const updated = await res.socialPost.save()

//        res.json(updated)
//    } catch (err) {
//        res.status(400).json({ message: err.message })
//    }
//})

//// DELETE remove
//router.delete('/:id', getSocialPostId, async (req, res) => {

//    try {
//        await res.socialPost.remove()

//        res.json({ message: 'Deleted Successfully' })
//    } catch (err) {
//        res.status(500).json({ message: err.message })
//    }
//})

//// middleware
//async function getSocialPostId(req, res, next) {
//    try {
//        socialPost = await socialPost.findById(req.params.id)
//        if (socialPost == null) { return res.status(404).json({ message: 'socialPost not found' }) }
//    } catch (err) { res.status(500).json({ message: err.message }) }
//    res.socialPost = socialPost
//    next()
//}
//// middleware
//async function getSocialPostUserId(req, res, next) {
//    try {
//        socialPost = await socialPost.findById(req.params.userId)
//        if (socialPost == null) { return res.status(404).json({ message: 'socialPost not found' }) }
//    } catch (err) { res.status(500).json({ message: err.message }) }
//    res.socialPost = socialPost
//    next()
//}

// export
module.exports = router