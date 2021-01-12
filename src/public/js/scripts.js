let test = document.getElementById("test");

// let election = require('../data/clean/election.json');
//
//console.log(Object.values(election[0])[5]);


let data = [{
  type: "choroplethmapbox",
  name: "US states",
  geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json",
  locations: ["AZ","FL","GA", "IA","MI","MN","NV", "NH", "NC","OH", "PA", "TX","WI", "AL", "AK",  "AR", "CA", "CO", "CT", "DE", "DC",  "HI", "ID", "IL", "IN", "KS", "KY", "LA", "ME", "MD", "MA", "MS", "MO", "MT", "NE",  "NJ", "NM", "NY",  "ND", "OK", "OR", "RI", "SC", "SD", "TN",  "UT", "VT", "VA", "WA", "WV", "WY"],
  z: [141, 140, 155, 147, 132, 146, 151, 137, 146, 136, 145, 141, 149, 151, 138, 158, 164, 141, 146, 145, 142, 150, 155, 160, 156, 161, 147, 164, 150, 152, 155, 167, 145, 146, 151, 154, 161, 145, 155, 150, 151, 162, 172, 169, 170, 151, 152, 173, 160, 176],
  zmin: 0.27,
  zmax: 0.66,
  colorscale: [[0, 'rgb(255,0,0)'], [1, 'rgb(0,0,255)']],
  colorbar: {
    y: 0,
    yanchor: "bottom",
    title: {
      text: "Biden Vote Share",
      side: "right"
    }
  }
}];

//console.log( Object.values(data)[0].locations);


for(let i = 0; i < 51; i++){
  //Object.values(data)[0].locations[i] = Object.values(election[i+1])[0];
  Object.values(data)[0].z[i] = Object.values(election[i+1])[5];
}
//console.log(Object.values(data));

let layout = {
  mapbox: {
    style: "dark",
    center: {
      lon: -96,
      lat: 40
    },
    zoom: 3.5
  },
  width: 1200,
  height: 800,
  margin: {
    t: 0,
    b: 0
  }
};

let config = {
  mapboxAccessToken: "pk.eyJ1IjoicHBpa2VhIiwiYSI6ImNramV4czZqbzV0ZXcycXJ3OG0wNDBvc3cifQ.MAj1mFEKGNJffhkPrB7J9A"
};

Plotly.newPlot(test, data, layout, config).then(gd => {
  gd.on('plotly_click', d => {
    let pt = (d.points || [])[0]
    console.log(pt.location);
    console.log(pt.properties.name);
    console.log(Object.values(data)[0].locations);

    let link = "html/" + pt.properties.name.replace(/ /g, "_") + ".html";
    window.open(link);
  }
)
});
