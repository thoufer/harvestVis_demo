var BarChart = (function(container, d3) {
  var margin = {}, width, height, months, bars, chartwrapper,
      xScale, yScale, xAxis, yAxis, bsvg, mgmt_unit, mgmt_map,
      projection, path;

  d3.queue()
    .defer(d3.json, "js/us-states.json")
    .defer(d3.csv, "js/HarvData.csv")
    .await(init);

  function init(error, us, csv) {
    updateDimensions(container);

    data = d3.nest()
              .key(function(d){ return d.region; })
              .entries(csv);

    months = [{month:'September', short_month:'Sept.', week:'35'},
              {month:'October',   short_month:'Oct.', week:'40'},
              {month:'November',  short_month:'Nov.', week:'45'},
              {month:'December',  short_month:'Dec.', week:'50'},
              {month:'January',   short_month:'Jan.', week:'55'}];

    mgmt_unit = [
      {
        "classname": "PF-North",
        "states": [53,41,30,16,2],
        "idx": 6
      },
      {
        "classname": "PF-South",
        "states": [6,32,49,4],
        "idx": 7
      },
      {
        "classname": "CF-North",
        "states": [38,31,46,56],
        "idx": 2
      },
      {
        "classname": "CF-South",
        "states": [8,20,35,40,48],
        "idx": 3
      },
      {
        "classname": "MF-North",
        "states": [26,27,17,18,19,39,55],
        "idx": 4
      },
      {
        "classname": "MF-South",
        "states": [29,21,47,1,5,22,28],
        "idx": 5
      },
      {
        "classname": "AF-North",
        "states": [51,54,44,42,36,34,33,25,24,23,11,10,9,50],
        "idx": 0
      },
      {
        "classname": "AF-South",
        "states": [12,13,37,45],
        "idx": 1
      },
    ];

    xScale = d3.scaleBand().domain(data[0].values.map(function(d){ return d.week; }));
    yScale = d3.scaleLinear().domain([0,0.15]);

    // set projection and path for nav map
    scaling = parseInt(width * 0.45)
    projection = d3.geoAlbersUsa().scale(scaling).translate([width*0.85, height - (height*0.80)]);
    path = d3.geoPath().projection(projection);

    // initialize the bsvg
    bsvg = d3.select("#barchart");

    // initialize the management Map
    mgmt_map = bsvg.append("g").attr("class", "mgmt_units");

    mgmt_unit.forEach(function(unit){
      mgmt_map.append("path")
        .datum(topojson.merge(us, us.objects.states.geometries.filter(function(d){ return d3.set(unit.states).has(d.id); })))
        .attr("class", "mgmt_unit")
        .attr("id", unit.idx)
        .attr("d", path)
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

    // initialize the axes.
    xAxis = d3.axisBottom(xScale)
              .tickSize(0.1);
    yAxis = d3.axisLeft(yScale)
              .ticks(15, "%");

    chartwrapper = bsvg.append('g');
    chartwrapper.append("g").classed("axis axis-x", true);
    chartwrapper.append("g").classed("axis axis-y", true);

    // render the chart
    render();
  }

  function render() {
    // update the dimensions based on width of container
    updateDimensions(container);

    d3.selectAll('.mgmt_unit')
      .on("click", function(d) {
          // Find previously selected, unselect
          d3.select(".selected-unit").classed("selected-unit", false);
          // Select current item
          d3.select(this).classed("selected-unit", true);
          // call chart update
          updateChart(this.id);
        });

    //update x and y scales to new dimensions
    xScale.rangeRound([0, width]).padding(0.2);
    yScale.rangeRound([height, 0]);

    bsvg.select('.axis.axis-x')
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
        .selectAll("text")
        .remove();

    bsvg.select('.axis.axis-y')
        .call(yAxis);

    chartwrapper.append("g")
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .attr('class', 'axis')
        .text("Total regional harvest");

    chartwrapper.append("g")
      .attr("class", "labels-x")
      .selectAll("text")
        .data(months).enter()
        .append("text")
          .attr("x", function(d){ return xScale(d.week); })
          .attr("y", height + (height * 0.08))
          .style("text-anchor", "left")
          .text(function(d){ return formatMonthLabel(d, container.width); });

    bars = chartwrapper.selectAll('.bar')
       .data(data[0].values).enter()
       .append("rect")
          .attr("class", "bar")
          .attr("x", function(d){ return xScale(d.week); })
          .attr("y", function(d) { return yScale(d.h); })
        	.attr("height", function(d){ return  height - yScale(d.h); })
        	.attr("width", xScale.bandwidth());

    // select AF-North as default. using jquery as d3 does not like
    // numeric ids
    $('path#0').addClass('selected-unit');

    //update svg elements to new dimensions
    bsvg
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom);
    mgmt_map.attr('transform', 'translate(50, 0)');
    chartwrapper.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  }

  function updateDimensions(winWidth){
    margin.top = parseInt(winWidth * 0.08) //60;
    margin.bottom = parseInt(winWidth * 0.07) //40;
    margin.right = parseInt(winWidth * 0.07) //50;
    margin.left = parseInt(winWidth * 0.10) //50;

    width =  parseInt(winWidth - margin.left - margin.right);
    height = Math.ceil(0.7 * width);
  }

  function updateChart(regionIdx){
    bars = bsvg.selectAll(".bar")
               .data(data[regionIdx].values);

    bars.enter()
      .append("rect")
        .attr("class", "bar")
        .attr("x", function(d){ return xScale(d.week); })
        .attr("y", function(d) {return yScale(d.h); })
        .attr("height", function(d){ return  height - yScale(d.h); })
      	.attr("width", xScale.bandwidth());

    bars.exit().remove();

    bars.transition()
      .attr("y", function(d) { return yScale(d.h); })
      .attr("height", function(d){ return  height - yScale(d.h); })
      .duration(850);
  }

  function formatMonthLabel(d){
      return (width >= 358) ? d.month : d.short_month;
  }

  return {
    render : render
  }

})($("#barchart-container").width(),d3);

window.addEventListener('resize', BarChart.render);
