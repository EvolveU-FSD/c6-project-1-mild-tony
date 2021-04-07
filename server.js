require('./model/skyrim') // initialize all of the scenes

const sceneRoutes = require('./routes/scene')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/scene', sceneRoutes)

app.get('/', (req, res) => {
    res.redirect('/scene/intro')
})

app.listen(port, () => {
  console.log(`Game server listening at http://localhost:${port}`)
})