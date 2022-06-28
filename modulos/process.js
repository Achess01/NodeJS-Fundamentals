//Agregar un evento para antes de que acabe el proceso
process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});
//Agregar un evento para cuando acabe el proceso
process.on("exit", () => {
  console.log("El proceso acabó");
});

//Cuando sucede un error no manejado
process.on("uncaughtException", (err, origen) => {
  console.error("Vaya, se nos ha olvidado capturar un error");
  console.error(err);
});
