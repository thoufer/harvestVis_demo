function drawMap() {
  var svg = d3.select("#activity-map");
  var stateInfo = d3.map();
  var projection = d3.geoAlbersUsa()
    .scale([1050]);
  var path = d3.geoPath().projection(projection);
  var selected = d3.select(null);

  resize_activity();

  // Add text labels
  var textLabels = svg.append("g")
    .attr("class", "textLabels");

  textLabels.append("text")
    .attr("x", 165)
    .attr("y", 15)
    .text("Pacific Flyway");

  textLabels.append("text")
    .attr("x", 185)
    .attr("y", 50)
    .text("107 Days");

  textLabels.append("text")
    .attr("x", 330)
    .attr("y", 15)
    .text("Central Flyway");

  textLabels.append("text")
      .attr("x", 350)
      .attr("y", 50)
      .text("74 Days");

  textLabels.append("text")
    .attr("x", 500)
    .attr("y", 15)
    .text("Mississippi Flyway");

  textLabels.append("text")
    .attr("x", 540)
    .attr("y", 50)
    .text("60 Days");

  textLabels.append("text")
    .attr("x", 700)
    .attr("y", 15)
    .text("Atlantic Flyway");

  textLabels.append("text")
    .attr("x", 720)
    .attr("y", 50)
    .text("60 Days");

  d3.queue()
     .defer(d3.json, "js/us-states.json") // from: http://bl.ocks.org/mbostock/raw/4090846/us.json
     .defer(d3.json, "js/FlywayBoundaryLine.geo.json")
     .defer(d3.csv, "js/States.csv", function(d){ stateInfo.set(d.id, {'name':d.name,
                                                                    'ab':d.abbrev,
                                                                    'duck_bag':d.duck_bag,
                                                                    'duck_hunters':d.duck_hunters,
                                                                    'duck_days': d.duck_daysAfield,
                                                                    'goose_bag':d.goose_bag,
                                                                    'goose_hunters': d.goose_hunters,
                                                                    'goose_days': d.goose_daysAfield,
                                                                    'species': d.species,
                                                                    'rank_duck': d.rankDuck,
                                                                    'rank_geese': d.rankGeese});
                                              })
     .await(ready);


  function ready(error, us, FlywayBoundaryLine) {
     if (error) throw error;

     var states = svg.append("g");
     states
         .attr("class", "states")
         .attr("transform", "translate(0, 50)")
       .selectAll("path")
       .data(topojson.feature(us, us.objects.states).features)
       .enter().append("path")
         .attr("d", path)
         .on("click", function(d){
            if(d.id === 15){
              // Change message for Hawaii
              var textblock = document.createElement('div');
              textblock.innerHTML = "Waterfowl are not hunted in <strong>Hawaii</strong>.";
            } else {
              data = stateInfo.get(d.id);
              var textblock = document.createElement('div');

              textblock.innerHTML += '<div class="state" id="state-value">' + data.name + '</div> has\n';
              textblock.innerHTML += '<div id="tx-indent">' + Number(data.duck_hunters).toLocaleString() +' duck hunters<br>' +
                                                              Number(data.goose_hunters).toLocaleString() + ' goose hunters</div>\n';

              textblock.innerHTML += '<div class="state" id="state-value">' + data.name + '</div> ranks\n';
              textblock.innerHTML += '<div id="tx-indent">'+ ordinal_suffix_of(data.rank_duck) + ' in duck harvest<br>'+
                                      ordinal_suffix_of(data.rank_geese)+ ' in goose harvest</div>';

              textblock.innerHTML += '<div class="state" id="hunter-value" style="font-weight: normal;">The average hunter harvests</div>\n';
              textblock.innerHTML += '<div id="tx-indent">'+
                                            Number(data.duck_bag) + ' ducks in ' + Number(data.duck_days) + ' days afield<br>' +
                                            Number(data.goose_bag) + ' geese in ' + Number(data.goose_days) + ' days afield </div>\n';

              textblock.innerHTML += '<div class="label state" id="hunter-value" style="margin-left:-10px;font-weight: normal;font-size: 15pt; color: #002868; font-family: "Arial Narrow", Arial, sans-serif;">Top harvested ducks</div>\n';
              textblock.innerHTML += '<div id="tx-indent">' +  data.species.replace(/;/g, "<br>") + '</div>';
            }

            var panel = document.getElementById('data-panel');
            if (panel.hasChildNodes()){
               panel.replaceChild(textblock, panel.childNodes[0]);
            } else {
              panel.appendChild(textblock);
            }
            // Find previously selected item, unselect
            // then Select current item
            selected.classed("selected", false);
            selected = d3.select(this).classed("selected", true);
          });

     states
        .append("path")
        .attr("class", "state-borders")
        .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

     svg.append("g")
       .attr("class", "flyway")
       .attr("transform", "translate(0, 50)")
       .selectAll("path")
       .data(FlywayBoundaryLine.features)
       .enter().append("path")
         .attr("d", path)
         .attr("fill", "none")
         .attr("stroke", '#666666')
         .attr("stroke-width", "3px");
   };
}

function resize_activity() {
  d3.select("g.textLabels").attr("transform", "scale(" + $("#map-container").width() / 960 + ")")
  d3.select("g.states").attr("transform", "scale(" + $("#map-container").width() / 960 + ")")
  d3.select("g.flyway").attr("transform", "scale(" + $("#map-container").width() / 960 + ")")
  $("#activity-map").height($("#map-container").width()*0.618);
};


function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "<sup>st</sup>";
    }
    if (j == 2 && k != 12) {
        return i + "<sup>nd</sup>";
    }
    if (j == 3 && k != 13) {
        return i + "<sup>rd</sup>";
    }
    return i + "<sup>th</sup>";
}

window.addEventListener("resize", resize_activity);
drawMap();
