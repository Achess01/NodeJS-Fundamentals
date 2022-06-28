function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      cb(err);
    }
  });
}

try {
  //seRompe();
  seRompeAsincrona(function (err) {
    console.log(err.message);
  });
} catch (error) {
  console.error("Vaya, algo se ha roto...");
  console.error(error.message);
  console.error("Error controlado");
}
