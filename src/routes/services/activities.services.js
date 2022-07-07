const { Activity, Country } = require('../../db.js')

//nueva actividad

const ActInfo = async() => {
    return await Activity.findAll({
        include: Country
    })
}


    

module.exports = {
    ActInfo
};