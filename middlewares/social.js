
const SocialPost = require('../models/socialPost')

exports.getSocialPostId = async (req, res, next) => {
    try {
        socialPost = await SocialPost.findById(req.params.id)
        if (socialPost == null) { return res.status(404).json({ message: 'socialPost not found' }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
    res.socialPost = socialPost
    next()
}
exports.getSocialPostUserId = async (req, res, next) => {
    try {
        socialPost = await SocialPost.findOne({ userId: req.params.userId })
        if (socialPost == null) { return res.status(404).json({ message: 'socialPost not found' }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
    res.socialPost = socialPost
    next()
}