const express = require('express')

const scenes = require('../model/scenesInMongo')
const formatSceneAsText = require('../view/formatSceneAsText')

let router = express.Router()

router.get('/:sceneName', async (req, res) => {
    let wrapWidth = req.query.wrapWidth || 60
    let sceneName = req.params.sceneName
    try {
        let scene = await scenes.findSceneByName(sceneName)
        res.send(formatSceneAsText(scene, wrapWidth, "http://localhost:3000"))    
    }
    catch (error) {
        console.log(error)
        res.status(404).send("Scene " + sceneId + " not found.\n")
    }
})

module.exports = router