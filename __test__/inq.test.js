let { name, selectWeapon, getFood } = require('../functions/inq')
const inquirer = require('inquirer')
jest.mock('inquirer')

describe('name function test', () => {
    test('user input with bob', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: 'bob' })
        
        await expect(name()).resolves.toEqual('bob')
    })
    test('user input with 123 should return error message', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: '123' })

        await expect(name()).resolves.toEqual('use letters only')
    })
    test('user with a symbol in should return error message', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: '!bob*&'})

        await expect(name()).resolves.toEqual('use letters only')
    })
})

describe('weaponChoice function test', () => {
    test('weapon choice user selects skateboard', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'skateboard' })
        
        await expect(selectWeapon(['skateboard', 'yukka plant', 'deck of cards'])).resolves.toEqual('skateboard')
    })
})

describe('getFood functions test', () => {
    test('get food returns boolean', async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ option: true })
        
        await expect(getFood()).resolves.toEqual(true)
    })
})

