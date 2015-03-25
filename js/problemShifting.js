
var colorScale = d3.scale.linear()
  .domain([9, 50])
  .range(["#33a02c", "#ff7f00"])
  .interpolate(d3.interpolateLab);

var color = function(d) { return colorScale(d['economy (mpg)']); };

var parcoords = d3.parcoords()("#problemShifting")
  .color("#d95f0e")
  .alpha(0.9);

// load csv file and create the chart
d3.csv('data/parallelData.csv', function(data) {
  parcoords
    .data(data)
    //.hideAxis(["name"])
    .margin({
        top: 40,
        left: 40,
        bottom: 40,
        right: 40
      })
    .render()
    .brushMode("1D-axes");  // enable brushing



  // create data table, row hover highlighting
  var grid = d3.divgrid();
  d3.select("#grid")
    .datum(data)
    .call(grid)
    .selectAll(".row")
    .on({
      "mouseover": function(d) { parcoords.highlight([d]) },
      "mouseout": parcoords.unhighlight
    });

  // update data table on brush event
  parcoords.on("brush", function(d) {
    d3.select("#grid")
      .datum(data)
      .call(grid)
      .selectAll(".row")
      .on({
        "mouseover": function(d) { parcoords.highlight([d]) },
        "mouseout": parcoords.unhighlight
      });
  });
});