const fs = require('fs');

let states = [];

let life_csv = fs.readFileSync('life.csv', 'utf8');

let life = life_csv.split("\n");


life.forEach(function(life) {
  let state_info = life.split(',');
  let state = {};
  state['state'] = state_info[0];
  state['avg'] = state_info[1];


  states.push(state);
});

fs.writeFileSync('life.json', JSON.stringify(states), 'utf8');
