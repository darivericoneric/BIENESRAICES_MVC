import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

// Crear la app
const app = express()

// Habilitamos Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Carpeta pública
app.use(express.static('public'))

// Routing
app.use('/auth', usuarioRoutes)


// Definir el puerto
const PORT = process.env.PORT ?? 3000

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
    console.clear()
    console.log('------------------------------------')
    console.log('✅ Servidor iniciado correctamente')
    console.log(`✅ http://localhost:${PORT}`)
    console.log('------------------------------------')
})