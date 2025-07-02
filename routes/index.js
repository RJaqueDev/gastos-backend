const router = require("express").Router();
const { authMiddleware } = require("../middleware/auth");

//Importacion de las diferentes rutas
const gastosRoutes = require("./gastos/gastoIndex");

//Indicamos que vamos a usar las rutas protegidas con JWT
router.use("/gastos", authMiddleware, gastosRoutes);

//Exportamos el router
module.exports = router;
