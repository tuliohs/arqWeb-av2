
exports.getSocialPostId = (req, res, next) => {
    try {
        socialPost = socialPost.findById(req.params.id)
        if (socialPost == null) { return res.status(404).json({ message: 'socialPost not found' }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
    res.socialPost = socialPost
    next()
}
exports.getSocialPostUserId = (req, res, next) => {
    try {
        socialPost = socialPost.findById(req.params.userId)
        if (socialPost == null) { return res.status(404).json({ message: 'socialPost not found' }) }
    } catch (err) { res.status(500).json({ message: err.message }) }
    res.socialPost = socialPost
    next()
}