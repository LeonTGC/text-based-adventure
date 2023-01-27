const { name } = require('./functions/inq')

let player = {
    name: "",
    weapon: "",
    health: 10
}
const weapons = ["skateboard", "deck of cards", "yukka plant"]

const start = async () => {
    console.log('what name?')
    player.name = await name()
    console.log('hello', player.name)
}
start()