const os = require("os");
const cpus = os.cpus();
console.log(cpus);

document.getElementById('header').innerText = cpus[0].model;// Can get browser info and system info!! Very cool