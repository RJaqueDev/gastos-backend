// Configuración de conexión a MySQL usando mysql2
const mysql = require("mysql2/promise");

// Crea un pool de conexiones para reutilizar conexiones y mejorar el rendimiento
const pool = mysql.createPool({
  host: "https://www.omnidev.cl", // Cambia por tu host
  user: "omnidevc_rjaquedev", // Cambia por tu usuario
  password: "TheStrokes181", // Cambia por tu contraseña
  database: "omnidevc_gastos-app", // Cambia por el nombre de tu base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
