const jwt = require("jsonwebtoken");

// Cambia esta clave secreta por una más segura en producción
const SECRET_KEY = "DivaJa-181";

// Middleware para verificar el token JWT en el header Authorization
function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ mensaje: "Token no proporcionado" });
  }
  const token = authHeader.split(" ")[1]; // Espera formato: Bearer <token>
  if (!token) {
    return res.status(401).json({ mensaje: "Token malformado" });
  }
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ mensaje: "Token inválido" });
    }
    req.user = decoded;
    next();
  });
}

module.exports = { authMiddleware, SECRET_KEY };
