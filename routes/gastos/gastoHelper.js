//Importamos la conexion a la base de datos
const pool = require("../../db/mysql");

//Funcion que obtiene todos los gastos
const obtenerGastos = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM gasto");
    return rows;
  } catch (error) {
    console.error("Error al obtener los gastos:", error);
    return error;
  }
};

//FUncion que obtiene los gastos dado un id de usuario
const obtenerGastoPorUsuario = async (idUsuario) => {
  try {
    //Construimos la query
    const query = `select * from usuario u
                       join gasto g on g.id_usuario = u.id
                       join categoria c on c.id = g.id_categoria
                       where u.id = ${idUsuario}`;
    //Hacemos el llamado a la base de datos
    const [rows] = await pool.query(query);
    //Devolvemos las filas encontradas
    return rows;
  } catch (error) {
    console.error("Error al obtener los datos por usuario: ", error);
    return error;
  }
};

const insertarGasto = async (monto, usuario, categoria, descripcion) => {
  try {
    //Query para insertar un gasto usando parámetros para evitar errores de sintaxis y SQL injection
    const query = `INSERT INTO gasto (monto, id_usuario, tiene_couta, id_categoria, cantidad_couta, descripcion) 
                 VALUES (?, ?, 0, ?, 0, ?)`;
    //Hacemos la consulta a la base de datos con parámetros
    const [rows] = await pool.query(query, [
      monto,
      usuario,
      categoria,
      descripcion,
    ]);
    //Devolvemos el resultado de la query
    return rows;z
  } catch (error) {
    console.error(`Error al insertar en la BD: ${error}`);
    return error;
  }
};

module.exports = {
  obtenerGastos,
  obtenerGastoPorUsuario,
  insertarGasto,
};
