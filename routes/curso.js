const express = require('express')

const router = express.Router()

const Curso = require('../models/curso')

// GET all
router.get('/', async (req, res) => {
    try {
        const curso = await Curso.find()

        return res.send(curso)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// GET by ID
router.get('/:id', getCurso, async (req, res) => {

    res.json(res.curso)
})

// POST create
router.post('/', async (req, res) => {

    const curso = new Curso({
        id: req.body.id,
        area: req.body.area,
        nome: req.body.nome,
        regime: req.body.regime,
        numeroDeSemestres: req.body.numeroDeSemestres,
        criadoEm: req.body.criadoEm,
        atualizadoEm: req.body.atualizadoEm
    })

    try {
        const created = await curso.save()

        res.status(201).json(created)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// PATCH update
router.patch('/:id', getCurso, async (req, res) => {
    if (req.body.id != null) { res.curso.id = req.body.id }
    if (req.body.area != null) { res.curso.area = req.body.area }
    if (req.body.nome != null) { res.curso.nome = req.body.nome }
    if (req.body.regime != null) { res.curso.regime = req.body.regime }
    if (req.body.numeroDeSemestres != null) { res.curso.numeroDeSemestres = req.body.numeroDeSemestres }
    if (req.body.criadoEm != null) { res.curso.criadoEm = req.body.criadoEm }
    if (req.body.atualizadoEm != null) { res.curso.atualizadoEm = req.body.atualizadoEm }


    try {
        const updated = await res.curso.save()

        res.json(updated)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// DELETE remove
router.delete('/:id', getCurso, async (req, res) => {

    try {
        await res.curso.remove()

        res.json({ message: 'Deleted Successfully' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// middleware
async function getCurso(req, res, next) {
    try {
        curso = await curso.findById(req.params.id)

        if (curso == null) {
            return res.status(404).json({ message: 'curso not found' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    res.curso = curso

    next()
}

// export
module.exports = router