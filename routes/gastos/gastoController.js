const {obtenerGastos} = require('./gastoHelper');

const getGastos = async (req, res) => {
    console.log(`API: api/gastos`);
    try {
        const resultado = await obtenerGastos()
        res.json({
            mensaje: 'Api funcionando',
            data: resultado
        })
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener los gastos",
            detalle: error
        })
    }
}

const getGastosPorUsuario = async (req, res) => {
  res.json({
    mensaje: "Hola"
  })
}

module.exports = {
    getGastos,
    getGastosPorUsuario
}