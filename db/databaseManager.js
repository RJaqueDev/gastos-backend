const pool = require("./mysql");

// Función para probar la conexión a la base de datos
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    console.log("Conexión a la base de datos MySql exitosa. ✅ ");
    connection.release();
    return true;
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    return false;
  }
}

module.exports = { testConnection };
