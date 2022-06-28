async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla ...");
      resolve();
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adiós ${nombre}`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("Alex");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);  
}

console.log("Empezamos el proceso");
main();
console.log("Termina el proceso");
