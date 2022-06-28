// console.log("Algo");
// console.info("Algo")
// console.error("Un error")
// console.warn("Hola")

/* var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Otra",
  },
];

console.table(tabla); */

/* console.group("Conver");
console.log("Hola");
console.log("Blablabla");
console.log("Adios");
console.groupEnd("Conver"); */

function function1() {
  console.group("Función1");
  console.log("Esto es de la función 1");
  console.log("Esto también");
  function2();
  console.groupEnd("Función1");
}

function function2() {
  console.group("Función2");
  console.log("Ahora estmos en la función 2");
  console.groupEnd("Función2");
}

console.log("Empezamos");
function1();
