// Configuración de conexión a MySQL usando mysql2 y variables de entorno
const mysql = require("mysql2/promise");
require("dotenv").config(); // Carga las variables de entorno desde un archivo .env

// Crea un pool de conexiones para reutilizar conexiones y mejorar el rendimiento
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Host desde variables de entorno
  user: process.env.DB_USER, // Usuario desde variables de entorno
  password: process.env.DB_PASS, // Contraseña desde variables de entorno
  database: process.env.DB_NAME, // Nombre de la base de datos desde variables de entorno
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;