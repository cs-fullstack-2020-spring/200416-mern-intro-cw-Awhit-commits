const express = require('express');
//Creating the middleware
const router = express.Router();

let characterCollection = require('../models/CharacterSchema')
//Able to show/write json in the body
router.use(express.json())

//Getting all Characters 
router.get('/',(req,res)=>{
    // res.send(`Get all Instances`)
    characterCollection.find({},(results,errors)=>{
        if (errors){
            res.send(errors)
        }
        else{
            res.send(results)
        }
    })
})

//Creating a Character
router.post('/',(req,res)=>{
    // res.send('Instance Created')
    characterCollection.create(req.body,(results,errors)=>{
        if (errors){
            res.send(errors)
        }
        else{
            res.send(results)
        }
    })
})

//Exporting the endpoints
module.exports = router