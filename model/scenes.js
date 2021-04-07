let scenes = {}

async function createScene(id, description, options) {
    if (!options) {
        options = []
    }
    scenes[id] = {
        id, 
        description, 
        options
    }
}

async function findSceneById(id) {
    let scene = scenes[id]
    if (!scene) {
        throw new Error("Scene " + id + " does not exist!")
    }
    return scene
}


module.exports = {
    createScene,
    findSceneById
}