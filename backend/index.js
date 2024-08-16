import express from "express";
import myqsl from "mysql";
import cors from "cors";
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = myqsl.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log("Error al conectar con la base de datos");
  } else {
    console.log("Conectado a la base de datos");
  }
});

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/peliculas", (req, res) => {
  const querySelect = "SELECT * FROM datospeliculas";
  db.query(querySelect, (err, result) => {
    if (err) {
      console.log("Error al extraer los datos");
    } else {
      res.json(result);
    }
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
