import os from 'os';

const cpus = os.cpus();

console.log("Total CPU cores:", cpus.length);

console.log("CPU Model:", cpus[0].model);

console.log("CPU Speed:", cpus[0].speed, "MHz");