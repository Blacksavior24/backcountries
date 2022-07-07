const { Router } = require('express');
const { ActInfo } = require('./services/activities.services.js')
const {Activity, Country} = require('../db');
const router = Router();

router.post("/", async function (req,res){
    const {
        name,
        season,
        duration,
        difficulty, 
        idCountry
    } = req.body;

     try{
        const actCreada = await Activity.create({
            name,
            season,
            duration,
            difficulty,
        })

        if(idCountry){
         actCreada.addCountry(idCountry)
        }
        res.send(actCreada) 
        
    }
    catch(err){
        console.log(err)
    }
})

router.get('/', async function (req, res){
    const act = await ActInfo()
    console.log(act)
    res.status(200).send(act)
}) 
 
/*
router.delete('/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        await borraractividades(id);
        res.status(201).json({id});
    } catch (error) {
        console.log('Borrado completo');
    }
})
*/
module.exports = router;