const fs = require('fs');
const ejs = require('ejs');
let election = JSON.parse(fs.readFileSync('data/clean/election.json', 'utf8'));
let life = JSON.parse(fs.readFileSync('data/clean/life.json', 'utf8'));

//about
let about_template = fs.readFileSync('views/about.ejs', 'utf8');
let about_html = ejs.render(about_template, {
  filename: __dirname + '/../views/about.ejs',
  title: "About",
});
fs.writeFileSync("build/about.html", about_html, 'utf8');

let landing_template = fs.readFileSync('views/landing.ejs', 'utf8');
let landing_html = ejs.render(landing_template, {
  filename: __dirname + '/../views/landing.ejs',
  title: "Home",
});
fs.writeFileSync("build/landing.html", landing_html, 'utf8');
