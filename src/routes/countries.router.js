const {Router} = require('express');
const {getApiInfo, getDbInfo} = require('./services/countries.services');
const {Country, Activity} = require('../db')

const router = Router();


router.get("/:id", async function (req, res){
    const id = req.params.id.toUpperCase()
    const allCountries = await getDbInfo();
    if ( id ) {
        const idCountries = allCountries.filter( i => i.id === id )
        idCountries.length?
        res.status(200).send(idCountries) :
        res.status(404).send('id no valido')
    }
})

router.get("/", async function (req, res){
    const {name} = req.query;
    let countries;
    const countryDB = await Country.count(); 
    countries = countryDB === 0 ?
    await getApiInfo() :
    await getDbInfo() 
if ( name ) {
    const byName = countries.filter(n => n.id.toLowerCase().includes(name.toLowerCase()));
    byName.length ? 
    res.status(200).send(byName) :
    res.status(404).send('no se encontro ningun pais')
}  else {
   res.status(200).send(countries)  
}
})


module.exports = router;