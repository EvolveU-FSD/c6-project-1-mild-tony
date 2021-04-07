const express = require('express')

const scenes = require('../model/scenes')
const formatSceneAsText = require('../view/formatSceneAsText')

let router = express.Router()

router.get('/:sceneId', (req, res) => {
    let sceneId = req.params.sceneId
    try {
        let scene = scenes.findSceneById(sceneId)
        res.send(formatSceneAsText(scene, 60, "http://localhost:3000"))    
    }
    catch (error) {
        console.log(error)
        res.status(404).send("Scene " + sceneId + " not found.\n")
    }
})

module.exports = router