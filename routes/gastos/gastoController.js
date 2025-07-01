const {
    obtenerGastos,
    obtenerGastoPorUsuario,
    insertarGasto
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
    console.info(`API: api/gastos/insertarGasto`);
    // Extrae idUsuario antes de usarlo
    let monto = req.body.monto ? req.body.monto : null;
    let idUsuario = req.body.idUsuario ? req.body.idUsuario : null;
    let idCategoria = req.body.idCategoria ? req.body.idCategoria : null;
    let descripcion = req.body.descripcion ? req.body.descripcion : null;


    if(!monto && !idUsuario && idCategoria){
        res.status(400).json({
            status: 400,
            mensaje: "Debe enviar todos los datos para poder insertar un gasto"
        })
    }

    try {
        // Insertamos un gasto
        const resultado = await insertarGasto(monto, idUsuario, idCategoria, descripcion);

        res.status(201).json({
            mensaje: "Gasto insertado correctamente", 
            datos : resultado
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
    getGastosPorUsuario,
    insertarGastoPorUsuario
}