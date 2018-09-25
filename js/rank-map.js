$(document).ready(function(){
  $("ul.option li").click(function(){
      $(this).addClass("selected");
      $(this).siblings().removeClass("selected");
      $('.ttip').css({opacity: 0});
  });

  $("#rank-duck").addClass("selected");
});

var color = d3.scaleQuantize()
    .domain([0,1])
    .range(['#e5f5f9','#ccece6','#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b']);
var div = d3.select("body").append("div")
    .attr("class", "ttip")
    .style("opacity", 0);

var rankings = d3.map();
var rankValue = 'duck'
var path = d3.geoPath();
var map_svg = d3.select("#harvest-map");
var zoomLayer = map_svg.append("g")
  .attr("class", "counties");

function createRankMap(){
  var width = 960, height = 550
      active = d3.select(null);

  var zoomed = function() {
    zoomLayer.attr("transform", d3.event.transform);
  }

  map_svg.call(d3.zoom()
    .scaleExtent([1, 12])
    .translateExtent([[0,0], [width, height]])
    .on("zoom", zoomed));
}

  d3.queue()
    .defer(d3.json, "https://d3js.org/us-10m.v1.json")
    .defer(d3.csv, 'js/Counties.csv', function(d){ rankings.set(d.FIPS, {
                                                                'harvest_ducks': +d.Ducks,
                                                                'harvest_geese': +d.Geese,
                                                                'name': d.countyName,
                                                                'state_code': +d.state,
                                                                'counties_in_state': +d.countyNo,
                                                                'state': d.abbrev,
                                                                'duck_rank': +d.rankDuck,
                                                                'goose_rank': +d.rankGeese,
                                                                'percentile_duck': +d.percentileDuck,
                                                                'percentile_geese': +d.percentileGeese,
                                                                'duck_rank_in_state': +d.stateRankDuck,
                                                                'goose_rank_in_state': +d.stateRankGeese
                                                               });
                                             })
    .await(draw);

function draw(error, us){
  if (error) throw error;

  zoomLayer.selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features)
    .enter().append("path")
    .attr("d", path)
     .attr("fill", function(d) {
         if(+d.id > 15000 && +d.id < 15010 || +d.id > 2000 && +d.id < 3000 ){
           return('gray');
         } else {
            return color(rankings.get(d.id).percentile_duck);
         }
       })
    .on("click", clicked);

  zoomLayer.append("path")
    .attr("class", "county-borders")
    .datum(topojson.mesh(us, us.objects.counties, function(a, b) { return a !== b; }))
    .attr("d", path);

  zoomLayer.append("path")
    .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
    .attr("class", "borders-dark")
    .attr("d", path);

  zoomLayer.append("path")
    .datum(topojson.mesh(us, us.objects.nation, function(a,b) { return a !== b; }))
    .attr("class", "borders-dark")
    .attr("d", path)
}

function sizeChange() {
    /*
      given a change to window size recalculate svg to fit within
      window.
    */
    d3.select("g")
      .attr("transform", "scale(" + $("#map").width() / 960 + ")")
      $("svg").height($("#harvest-map").width()*0.618);
}

function clicked(d, us){
  if (active.node() === this) return reset();
  active.classed("active", false);
  active = d3.select(this).classed("active", true);

  var textmap = {}

  if (rankValue == 'duck') {
    textmap = {'name': rankings.get(d.id).name,
               'abbreviation': rankings.get(d.id).state,
               'nation-rank': Math.floor(rankings.get(d.id).duck_rank),
               'state-rank': Math.floor(rankings.get(d.id).duck_rank_in_state),
               'state-counties': rankings.get(d.id).counties_in_state};
  } else {
    textmap = {'name': rankings.get(d.id).name,
               'abbreviation': rankings.get(d.id).state,
               'nation-rank': Math.floor(rankings.get(d.id).goose_rank),
               'state-rank': Math.floor(rankings.get(d.id).goose_rank_in_state),
               'state-counties': rankings.get(d.id).counties_in_state};
  }

  var CountySpec = d.id.slice(0,2) != '22' ? " counties" : " parishes";

  if(d.id.slice(0,2) == '15'){
    tooltipText = "Migatory birds are not hunted in Hawaii.";
  } else if (d.id.slice(0,2) == '02'){
    tooltipText = "Survey data are not collected at the county level in Alaska.";
  } else if (textmap["nation-rank"] == 0) {
    tooltipText = "No harvest reported to survey for " + textmap['name'] +', ' + textmap['abbreviation'];
  }else {
    tooltipText = textmap['name'] + ', ' + textmap['abbreviation'] + ' ranks '+
                  ordinal_suffix_of(textmap['state-rank'].toLocaleString())
                  + ' out of ' + textmap['state-counties'] + CountySpec +' in the state and ' +
                  ordinal_suffix_of(textmap['nation-rank'].toLocaleString()) + ' out of ' +
                  '3,115 in the U.S.';
  }

  div.transition()
    .duration(250)
    .style("opacity", 1);

  div.html(tooltipText)
    .style("left", (d3.event.pageX + 10) + "px")
    .style("top", (d3.event.pageY) + "px");
}

function reset() {
  active.classed("active", false);
  active = d3.select(null);

  // remove last tooltip
  d3.select('.ttip').style("opacity", "0");
}

function changeRank(value){
  rankValue = value;

  /*When changing ranking reset county color and hide any tooltips that might be visible */
  active.classed("active", false);

  d3.selectAll(".tooltip")
    .style("opacity", 0);

  zoomLayer.selectAll("path")
    .attr("fill", function(d) {

      if(+d.id > 15000 && +d.id < 15010 || +d.id > 2000 && +d.id < 3000 ){
        return('gray');
      } else {
        if( value == 'duck' && d.id != null){
          return color(rankings.get(d.id).percentile_duck);
        }
        if (value == 'geese' && d.id != null) {
          return color(rankings.get(d.id).percentile_geese);
        }
      }
    });
};

d3.select(window).on("resize", sizeChange);
createRankMap();
