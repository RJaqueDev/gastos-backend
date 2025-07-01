# Gastos Backend

Este proyecto es una API backend para la gestión de gastos personales o de empresa, desarrollada con Node.js y Express, utilizando MySQL como base de datos.

## Características

- CRUD de gastos (crear, leer, actualizar, eliminar)
- Organización modular por rutas, controladores y helpers
- Conexión a base de datos MySQL
- Middleware para manejo de peticiones

## Estructura del proyecto

```
├── index.js                # Punto de entrada principal
├── package.json            # Dependencias y scripts
├── db/                     # Conexión y gestión de base de datos
│   ├── databaseManager.js
│   └── mysql.js
├── middleware/             # Middlewares personalizados
├── routes/                 # Definición de rutas
│   ├── index.js
│   └── gastos/
│       ├── gastoController.js
│       ├── gastoHelper.js
│       └── gastoIndex.js
└── README.md
```

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd gastos-backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura la base de datos en `db/mysql.js` según tus credenciales de MySQL.

## Uso

Inicia el servidor con:

```bash
node index.js
```

El backend estará disponible en `http://localhost:3000` (o el puerto configurado).

## Endpoints principales

- `/gastos` - Listado y creación de gastos
- `/gastos/:id` - Consulta, actualización y eliminación de un gasto específico

## Contribución

¡Las contribuciones son bienvenidas! Abre un issue o pull request para sugerencias o mejoras.

## Licencia

MIT
