const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries.router.js')
const activities = require('./activities.router.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries)
router.use('/activity', activities)

module.exports = router;
