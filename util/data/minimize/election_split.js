const fs = require('fs');

let states = [];

let election_csv = fs.readFileSync('../../../data/original/election.csv', 'utf8');

let election = election_csv.split("\n");

for (let i = 0; i < election.length - 1; i++) {
  let state_info = election[i].split(',');
  let state = {};
  state['state'] = state_info[0];
  state['result'] = state_info[1];
  state['Dvotes'] = state_info[3];
  state['Rvotes'] = state_info[4];
  state['Ovotes'] = state_info[5];
  state['Dpercent'] = state_info[6];
  state['Rpercent'] = state_info[7];
  state['Opercent'] = state_info[8];

  states.push(state);
}


fs.writeFileSync('../../../data/clean/election.json', JSON.stringify(states), 'utf8');
