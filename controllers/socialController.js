const uuidv4 = require("uuid").v4
const uuid = uuidv4();
const SocialPost = require('../models/socialPost')

// obter post por ID
exports.defaultGet = (req, res) => {
    res.json(res.socialPost)
}

exports.criarPost = async (req, res) => {
    const socialPost = new SocialPost({
        userId: req.body.userId ?? uuid,
        foto: req.body.foto,
        status: req.body.status,
        dataDeCriacao: req.body.dataDeCriacao,
        dataDeModificacao: req.body.dataDeModificacao
    })
    try {
        const created = await socialPost.save()

        res.status(201).json(created)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.updateSocial = (req, res) => {
    if (req.body.foto) { res.socialPost.foto = req.body.foto }
    if (req.body.status) { res.socialPost.status = req.body.status }
    if (req.body.dataDeCriacao) { res.socialPost.dataDeCriacao = req.body.dataDeCriacao }
    if (req.body.dataDeModificacao) { res.socialPost.dataDeModificacao = req.body.dataDeModificacao }

    try {
        const updated = res.socialPost.save()

        res.json(updated)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.delSocial = (req, res) => {

    try {
        res.socialPost.remove()

        res.json({ message: 'Deleted Successfully' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


exports.postar = (req, res) => {
    res.socialPost.status.publicado = true;
    try {
        const updated = res.socialPost.save()

        res.json(updated)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
