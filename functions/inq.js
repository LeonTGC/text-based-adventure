const inquirer = require('inquirer')


const tester = () => 'test'

const name = async () => {
    //res 
    const { userInput } = await inquirer.prompt({
        type: 'input',
        name: 'userInput',
        message: 'what is your name?'
    })
    if(!userInput.match(/^[a-zA-Z]+/g)){
        return 'use letters only'
    }else {
        return userInput
    }
}
const selectWeapon = async (weapons) => {
    const { weaponChoice } = await inquirer.prompt({
        type: 'list',
        name: 'weaponChoice',
        message: 'choose your weapon',
        choices: weapons.map(weapon => weapon)
    })
    return weaponChoice
}
const getFood = async () => {
    const { option } = await inquirer.prompt({
        type: 'confirm',
        name: 'option',
        message: 'go to get food?'
    })
    if(option){
        return true
    }else{
        return false
    }
}


module.exports = {
    name,
    selectWeapon,
    getFood
}