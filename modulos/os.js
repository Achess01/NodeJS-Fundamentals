const os = require("os");

//Arquitectura
// console.log(os.arch());
//Plataforma (Linux, Windows...)
// console.log(os.platform());
//Cores
// console.log(os.cpus());
//Constantes
// console.log(os.constants);
const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}

function mb(bytes) {
  return kb(bytes) / SIZE;
}

function gb(bytes) {
  return mb(bytes) / SIZE;
}

//Memoria libre
// console.log(os.freemem());
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));
//Memoria total
// console.log(os.totalmem());
// console.log(gb(os.totalmem()));

//Acceder al directorio local
// console.log(os.homedir());

//Directorio de temporales
// console.log(os.tmpdir());

// Nombre de la máquina
// console.log(os.hostname());

// Interfaces de red
// console.log(os.networkInterfaces());
