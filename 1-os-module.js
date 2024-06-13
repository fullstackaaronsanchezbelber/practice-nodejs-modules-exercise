// Leer README

const os = require('os')

const host = os.hostname()
const ver = os.version()
const memory = os.totalmem()/ (1024**3)

console.log(`Nombre del equipo: ${host}`)
console.log(`Edición/Versión del sistema operativo: ${ver}`)
console.log(`Memoria RAM total: ${memory} GB`)