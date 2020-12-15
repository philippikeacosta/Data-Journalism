const fs = require('fs');

let states = [];

let life_csv = fs.readFileSync('../../../data/original/life.csv', 'utf8');

let life = life_csv.split("\n");


for (let i = 0; i < life.length - 1; i++) {
  let state_info = life[i].split(',');
  let state = {};
  state['state'] = state_info[0];
  state['avg'] = state_info[1];


  states.push(state);

}


fs.writeFileSync('../../../data/clean/life.json', JSON.stringify(states), 'utf8');
