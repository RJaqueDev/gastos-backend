const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./middleware/auth');

// Genera un token JWT de ejemplo (válido por 1 día)
const payload = { user: 'api-user' };
const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });

console.log('Token JWT para pruebas:');
console.log(token);