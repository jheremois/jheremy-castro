const express = require('express')

const router = express.Router()

const controller = require('../controller/controller')

module.exports = ()=>{

    router.get('/', controller.jheremy)
    router.post('/mail', controller.hello)
    return router

}