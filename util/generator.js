const fs = require('fs');
const ejs = require('ejs');
let election = JSON.parse(fs.readFileSync('./data/clean/election.json', 'utf8'));
let life = JSON.parse(fs.readFileSync('./data/clean/life.json', 'utf8'));
let filename = "";


election.forEach(function(state){
  let state_template = fs.readFileSync('./views/micro.ejs', 'utf8');
  filename = "./build/html/" + state.state.replace(/ /g, "_").replace("?", "_") + ".html";
  let state_html = ejs.render(state_template, {
    filename: __dirname + '/../views/micro.ejs',
    data: state,
    election: election,
    life: life,
  });
  fs.writeFileSync(filename, state_html, 'utf8');
});

//about
let about_template = fs.readFileSync('./views/about.ejs', 'utf8');
let about_html = ejs.render(about_template, {
  filename: __dirname + '/../views/about.ejs',
  title: "About",
});
fs.writeFileSync("./build/about.html", about_html, 'utf8');

// console.log(JSON.stringify(election));
let index_template = fs.readFileSync('./views/index.ejs', 'utf8');
let index_html = ejs.render(index_template, {
  filename: __dirname + '/../views/index.ejs',
  title: "Home",
  election: JSON.stringify(election),
  life: JSON.stringify(life),
});
fs.writeFileSync("./build/index.html", index_html, 'utf8');
