const gastoHelper = require('./gastoHelper');

const getGastos = (req, res) => {
    try {
        res.json({
            mensaje: 'Api funcionando'
        })
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener los gastos",
            detalle: error
        })
    }
}

module.exports = {
    getGastos
}