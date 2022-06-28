const { exec, spawn } = require("child_process");

/* exec("node modulos/consola.js", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});
 */

let process = spawn("ls", ["-la"]);
console.log(process.pid);

process.stdout.on("data", function (dato) {
  console.log(dato.toString());
});

process.on("exit", function () {
  console.log("El proceso terminó");
});
