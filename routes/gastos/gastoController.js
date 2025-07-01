const {
    obtenerGastos,
    obtenerGastoPorUsuario
} = require('./gastoHelper');

const getGastos = async (req, res) => {
    console.info(`API: api/gastos`);
    try {
        const resultado = await obtenerGastos()
        res.status(200).json({
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
    console.info(`API: api/gastos/usuario`);
    // Extrae idUsuario antes de usarlo
    const { idUsuario } = req.body;

    try {
        const gastosPorPersona = await obtenerGastoPorUsuario(idUsuario);
        res.status(200).json({
            mensaje: "Gastos por usuario",
            data: gastosPorPersona
        })  
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener los gastos por usuario",
            detalle: error
        })
    }
}

const insertarGastoPorUsuario = async (req, res) => {
    console.info(`API: api/gastos/usuario`);
    // Extrae idUsuario antes de usarlo
    const { monto, idUsuario, idCategoria } = req.body;

    try {
        // Aquí deberías implementar la lógica para insertar el gasto en la base de datos
        // Por ejemplo:
        // await insertarGasto(monto, idUsuario, idCategoria);
        res.status(200).json({
            mensaje: "Gasto insertado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al insertar el gasto",
            detalle: error
        });
    }
}


module.exports = {
    getGastos,
    getGastosPorUsuario
}