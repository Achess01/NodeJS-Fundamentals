const fs = require("fs");
const stream = require("stream");

let data = "";

/* let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("utf-8");
readableStream.on("data", function (chunk) {
  data += chunk;
});

readableStream.on("end", function () {
  console.log(data);
}); */

// process.stdout.write("hola");
// process.stdout.write("que");
// process.stdout.write("tal");

let readableStream = fs.createReadStream(__dirname + "/input.txt");

const Transform = stream.Transform;
function Mayus() {
  Transform.call(this);
}

Mayus.prototype = Transform.prototype;

Mayus.prototype._transform = function (chunk, codif, cb) {
  let chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
