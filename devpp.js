const participantes = require("./participantes");

const random = Math.round(Math.random() * participantes.length + 1);
const g = participantes.filter(p => {
  return p.Id == random;
});

console.log(g[0].Nome);
