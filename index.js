// Importa los módulos necesarios
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js');

// Crea una instancia de la aplicación Express
const app = express();

//Realizar prueba de conexión a la base de datos
const db = require('./db/mysql.js');
db.getConnection()
  .then(connection => {
    console.log('Conexión a la base de datos exitosa');
    connection.release(); // Libera la conexión después de la prueba
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Habilita CORS para permitir solicitudes de otros orígenes
app.use(cors());

// Permite recibir y procesar JSON en las solicitudes
app.use(express.json());

// Define el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

//Montamos todas las rutas debajo de API
app.use('/api', routes)

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
