const fs = require('fs');
const ejs = require('ejs');

//about
let about_template = fs.readFileSync('views/about.ejs', 'utf8');
let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs',
  title: "About",
});
fs.writeFileSync("build/about.html", about_html, 'utf8');
