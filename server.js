const scenes = require('./model/scenes')
const skyrim = require('./model/skyrim')

const formatSceneAsText = require('./view/formatSceneAsText')

const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/scene/:sceneId', (req, res) => {
    let sceneId = req.params.sceneId
    try {
        let scene = scenes.findSceneById(sceneId)
        res.send(formatSceneAsText(scene, 60, "http://localhost:"+port+""))    
    }
    catch (error) {
        console.log(error)
        res.status(404).send("Scene " + sceneId + " not found.\n")
    }
})

app.get('/', (req, res) => {
    res.redirect('/scene/intro')
})

app.listen(port, () => {
  console.log(`Game server listening at http://localhost:${port}`)
})