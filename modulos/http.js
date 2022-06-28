const { setMaxListeners } = require("events");
const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva petición");
  console.log(req.url);
  switch (req.url) {
    case "/hola":
      res.write("Hola, que tal");
      res.end();
      break;
    default:
      res.write("Error 404: No se lo que quieres");
      res.end();
  }
  //Cabeceras de la respuesta
  // res.writeHead(201, { "Content-Type": "text/plain" });
  //Escribir el cuerpo de la respuesta
  // res.write("Hola ya se usar HTTP de NodeJS ");
  // res.end();
}
console.log("Escuchando http en el puerto 3000");
