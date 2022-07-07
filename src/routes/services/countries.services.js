const {Country , Activity } = require('../../db')
const axios = require('axios');


const getApiInfo = async () =>{
    const { data } = await axios('https://restcountries.com/v3/all');
    const api = await data.map(country => { 
        
        return {
           id: country.cca3,
           name: country.name.common,
           flag: country.flags[0],
           continent: country.continents[0],
           capital: country.capital?.[0] ,
           subregion: country.subregion? country.subregion:'No tiene',
           area: country.area? country.area:'No tiene',
           poblation: country.population?country.population:0,
        }
    });
    const result = await Country.bulkCreate(api)
    return result;
}

const getDbInfo = async() => { 
    return await Country.findAll({
        include: {
            model: Activity,
            attribute: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: []
            }
        }
    })
}

module.exports = {
    getApiInfo,
    getDbInfo,
}