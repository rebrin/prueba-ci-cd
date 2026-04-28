// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Una ruta de ejemplo que nuestra prueba usará
app.get("/", (req, res) => {
  res.json({ mensaje: "Hola desde mi primer CI/CD!" });
});

// Iniciamos el servidor solo si no estamos en el entorno de pruebas
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
