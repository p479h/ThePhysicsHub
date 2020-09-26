const fs = require('fs');
const path = require('path');


const simulations = [{
  "name": "Simple pendulum",
  "description": "A bob connected to a rigid massless rod suspended from a hinge.",
  "urlName": "simplePendulum",
  "jsfile": "simplePendulum",
  "image": "simplePendulum.png",
  "explanation": "-",
  "labels": ["mechanics", "pendulum"],
}, {
  "name": "Elastic pendulum",
  "description": "A bob connected to a spring suspended from a hinge.",
  "urlName": "elasticPendulum",
  "jsfile": "elasticPendulum",
  "image": "ellasticPendulum.png",
  "explanation": "-",
  "labels": ["mechanics", "pendulum"],
}, {
  "name": "Coupled pendulum",
  "description": "Two pendulum coupled by a spring connecting the bobs.",
  "urlName": "coupledPendulum",
  "jsfile": "coupledPendulum",
  "image": "coupledPendulum.png",
  "explanation": "-",
  "labels": ["mechanics", "pendulum"],
}, {
  "name": "Force Table",
  "description": "A force table for visualizing vector addition",
  "urlName": "force_table",
  "jsfile": "force_table",
  "image": "forceTable.png",
  "explanation": getFile("force_table_explanation.ejs"),
  "labels": ["mechanics", "force"],
}, {
  "name": "collision",
  "urlName": "collision",
  "jsfile": "collision",
  "image": "collision.png",
  "description": "A simple collision engine to explore momentum conservation.",
  "explanation": "-",
  "labels": ["mechanics", "energy"],
},{
  "name": "nBody",
  "description": "Simulation that demonstrates gravity and collisions with n bodies",
  "urlName": "nBody",
  "jsfile": "nBody",
  "image": "nBody.png",
  "explanation": getFile("nBodyExplanation.ejs"),
  "labels": ["mechanics", "collision"],
},{
  "name": "Double pendulum 2D",
  "description": "A pendulum with another pendulum attached to its end.",
  "urlName": "doublePendulum2D",
  "jsfile": "doublePendulum2D",
  "image": "doublePendulum2D.png",
  "explanation": "-",
  "labels":["mechanics", "pendulum", "WIP"],
},{
  "name": "Projectile Motion in 2D",
  "description": "This is a projectile motion simulation.",
  "urlName": "projectileMotion2D",
  "jsfile": "projectileMotion2D",
  "image": "projectileMotion2D.png",
  "explanation": "I have a projectile, I have some gravity... shwooosh!",
  "labels": ["mechanics", "projectile", "motion", "WIP"],
},{
  "name": "Ray Optics",
  "description": "A general Ray-Optics simulation.",
  "urlName": "rayOptics",
  "jsfile": "rayOptics",
  "image": "WIP-logo.png",
  "explanation": "WIP",
  "labels": ["optics", "WIP"],
}];


function getFile(filename) {
  str = fs.readFileSync(path.resolve(__dirname, filename), "utf-8");
  return str;
}

module.exports = simulations;
