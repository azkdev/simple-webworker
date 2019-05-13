const worker = new Worker("./worker.js");

let t = 0;
const pel = document.getElementById("time");

worker.onmessage = function(e) {
  pel.innerHTML = t += e.data;
};
