const fs = require("fs"); //Requerir file system CommonJS

//Lo mejor es usar funciones asíncronas
function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    //leido
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No he podido escribirlo", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

borrar(`${__dirname}/archiv1.txt`, console.log);

//leer(`${__dirname}/archiv1.txt`, console.log);
//escribir(`${__dirname}/archivo1.txt`, "Soy un archivo nuevo", console.log);
