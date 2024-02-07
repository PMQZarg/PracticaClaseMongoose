import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.router.js"

// recordar instalar el npm install mongoose

const app = express ()
const PORT = 8080



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.use(express.json ())

/* esta url se obtiene desde la pagina de mongodb , entrar a Data services , Overview, conect, y luego elegir la opcion drivers, en la vetana elegir opcion node.js, activar el odn library,
 y en la ventana se encuentra la url para copiar aqui abajo. */


mongoose.connect("mongodb+srv://pmqzarg:<password>@codercluster.bljqyhl.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Conectado a la base de datos")
})
.catch(error => {
    console.log("Error al conectarse a la base de datos", error)
})

app.use("/api/users", userRouter)

