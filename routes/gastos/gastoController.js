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

    if(!monto && !idUsuario && idCategoria){
        res.status(400).json({
            status: 400,
            mensaje: "Debe enviar todos los datos para poder insertar un gasto"
        })
    }

    try {
        // Insertamos un gasto
        const resultado = await insertarGasto(monto, idUsuario, idCategoria);

        res.status(201).json({
            mensaje: "Gasto insertado correctamente", 
            datos : {
                monto,
                idUsuario,
                idCategoria
            }
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