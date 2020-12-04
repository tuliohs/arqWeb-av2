const uuidv4 = require("uuid").v4
const uuid = uuidv4();

const SocialPost = require('../models/socialPost')

exports.criarPost = (req, res) => {
    const socialPost = new SocialPost({
        //userId: userId ?? uuid,
        foto: req.body.foto,
        //status: req.body.status,
        //dataDeCriacao: req.body.dataDeCriacao,
        //dataDeModificacao: req.body.dataDeModificacao
    })
    try {
        const created = socialPost.save()

        res.status(201).json(created)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
