/**
 * Generates the landing page state map infographic for the election data vote share.
*/
function infographic(){
let electionmap = document.getElementById("electionmap");

let data = [{
  type: "choroplethmapbox",
  name: "US states",
  geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json",
  locations: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
  z: [141, 140, 155, 147, 132, 146, 151, 137, 146, 136, 145, 141, 149, 151, 138, 158, 164, 141, 146, 145, 142, 150, 155, 160, 156, 161, 147, 164, 150, 152, 155, 167, 145, 146, 151, 154, 161, 145, 155, 150, 151, 162, 172, 169, 170, 151, 152, 173, 160, 176],
  zmin: 0.27,
  zmax: 0.66,
  colorscale: [
    [0, 'rgb(184,12,9)'],
    [1, 'rgb(0, 170, 255)']
  ],
  colorbar: {
    y: 0,
    yanchor: "bottom",
    title: {
      text: "Biden Vote Share",
      side: "right"
    }
  }
}];

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

Plotly.newPlot(electionmap, data, layout, config).then(gd => {
  gd.on('plotly_click', d => {
    let pt = (d.points || [])[0];
    let link = "html/" + pt.properties.name.replace(/ /g, "_") + ".html";
    window.open(link);
  });
});

}

infographic();
