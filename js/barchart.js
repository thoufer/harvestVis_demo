var months = [{month:'September', week:35},
              {month:'October',   week:40},
              {month:'November',  week:45},
              {month:'December',  week:50},
              {month:'January',   week:55}];

var margin = {top: 40, right: 50, bottom: 40, left: 50};
var width = parseInt(d3.select("#barchart-container").style("width"),10); //750,
var height = parseInt(d3.select("#barchart-container").style("height"),10); //550
var innerWidth = width - margin.left - margin.right;
var innerHeight = height - margin.top - margin.bottom;
var xScale = d3.scaleBand()
                .rangeRound([0, innerWidth])
                .padding(0.2),
    yScale = d3.scaleLinear()
                .rangeRound([innerHeight, 0]),
    xAxis = d3.axisBottom(xScale)
              .tickSize(0.1),
    yAxis = d3.axisLeft(yScale)
              .ticks(15, "%");

var bsvg = d3.select("#barchart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("class", "graph")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json("js/us-states.json", function (error, us){

  var projection = d3.geoAlbersUsa().scale(400).translate([550,50]);
  var path = d3.geoPath().projection(projection);


  var mgmt_map = bsvg.append("g")
    .attr("class", "mgmt_units");

  mgmt_unit.forEach(function(unit){
    mgmt_map.append("path")
      .datum(topojson.merge(us, us.objects.states.geometries.filter(function(d){ return d3.set(unit.states).has(d.id); })))
      .attr("class", "mgmt_unit")
      .attr("d", path)
      .on("click", function(d){
        // Find previously selected, unselect
        d3.select(".selected-unit").classed("selected-unit", false);
        // Select current item
        d3.select(this).classed("selected-unit", true);
        update(unit.idx); });
  });

  mgmt_map.append("path")
    .attr("class", "state-borders white")
    .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

  mgmt_unit.forEach(function(unit){
    mgmt_map.append("path")
      .datum(topojson.merge(us, us.objects.states.geometries.filter(function(d){ return d3.set(unit.states).has(d.id); })))
      .attr("class", "mgmt_unit boundary")
      .attr("d", path);
  });

    var data = HarvestByRegion[0];

    xScale.domain(data.values.map(function(d) { return d.week; }));
    yScale.domain([0, 0.15]);

    var bargraph = bsvg.append('g');

    bargraph.append("g")
      .attr("class", "axis axis-x")
      .attr("transform", "translate(0," + innerHeight + ")")
      .call(xAxis)
        .selectAll("text")
        .remove();

    bargraph.append("g")
        .attr("class", "axis axis-y")
        .call(yAxis);

    bargraph.append("g")
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Total Harvest");

    bargraph.append("g")
      .selectAll("text")
        .data(months).enter()
        .append("text")
          .attr("x", function(d){ return xScale(d.week) + 10; })
          .attr("y", innerHeight + 30)
          .style("text-anchor", "left")
          .text(function(d){ return d.month; });

    var bars = bargraph.selectAll(".bar")
      .data(data.values);

      bars.enter()
        .append("rect")
          .attr("class", "bar")
          .attr("x", function(d){ return xScale(d.week); })
          .attr("y", function(d) { return yScale(0); })
        	.attr("height", function(d){ return  innerHeight - yScale(0); })
        	.attr("width", xScale.bandwidth());
});

function init(){

    var data = HarvestByRegion[0];

    xScale.domain(data.values.map(function(d) { return d.week; }));
    //yScale.domain([0, d3.max(data.values, function(d) { return d.h; })]);
    yScale.domain([0, 0.15]);

    var bargraph = bsvg.append('g');

    bargraph.append("g")
      .attr("class", "axis axis-x")
      .attr("transform", "translate(0," + innerHeight + ")")
      .call(xAxis)
        .selectAll("text")
        .remove();

    bargraph.append("g")
        .attr("class", "axis axis-y")
        .call(yAxis);

    bargraph.append("g")
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Total Harvest");

    bargraph.append("g")
      .selectAll("text")
        .data(months).enter()
        .append("text")
          .attr("x", function(d){ return xScale(d.week) + 10; })
          .attr("y", innerHeight + 30)
          .style("text-anchor", "left")
          .text(function(d){ return d.month; });

    var bars = bargraph.selectAll(".bar")
      .data(data.values);

      bars.enter()
        .append("rect")
          .attr("class", "bar")
          .attr("x", function(d){ return xScale(d.week); })
          .attr("y", function(d) { return yScale(0); })
        	.attr("height", function(d){ return  innerHeight - yScale(0); })
        	.attr("width", xScale.bandwidth());
}

function update(regionIdx){
  var data = HarvestByRegion[regionIdx];

  xScale.domain(data.values.map(function(d) { return d.week; }));
  //yScale.domain([0, d3.max(data.values, function(d) { return d.h; })]);

  var bars = bsvg.selectAll(".bar")
    .data(data.values);

    bars.enter()
      .append("rect")
        .attr("class", "bar")
        .attr("x", function(d){ return xScale(d.week); })
        .attr("y", function(d) { return yScale(d.h); })
      	.attr("height", function(d){ return  innerHeight - yScale(d.h); })
      	.attr("width", xScale.bandwidth());

    bars.exit().remove();

    bars.transition()
      .attr("y", function(d) { return yScale(d.h); })
      .attr("height", function(d){ return  innerHeight - yScale(d.h); })
      .duration(850);

};


function resizeBarchart() {
  bsvg.attr("width", width).attr("height", height)
  bsvg.size([width, height]);
};

window.addEventListener("resize", resizeBarchart);
//init();
