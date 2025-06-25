const router = require('express').Router();

//Importacion de las diferentes rutas 
const gastosRoutes = require('./gastos/gastoIndex')

//Indicamos que vamos a usar las rutas
router.use('/gastos', gastosRoutes);

//Exportamos el router
module.exports = router;