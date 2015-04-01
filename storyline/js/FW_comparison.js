
var dataset = [{label:"Food waste in the developed world: 222 million tons/yr", value:22},{label:"Total food production in sub-Saharan Africa: 230 million tons/yr",value:23}];

  var arc = d3.svg.arc()
  .outerRadius(function(d,i){return (4-i)*d.value*2+4;})
  .startAngle(0)
  .endAngle(2*Math.PI);

var svg = d3.select("#diagram").append("svg")
  .attr("width", 600)
  .attr("height", 600)
  .selectAll("g")
  .data(dataset)
  .enter()
  .append("g")
  .attr("transform", "translate(300,290)");

var LineCircle = svg.append("g")
  .attr("id","LineCircle")
  .style("fill","black")
  .attr("class", "label");
  


var arcs = svg.append("path")
  .attr("stroke", "#006837")
  .attr("stroke-width", 2)
  .attr("fill", "none")
  .attr("id", function(d,i){return "s"+i;})
  .style("stroke-dasharray", "20, 10")
  .attr("d",arc);
  
LineCircle.append("text")
  .attr("dy", -10)
  .style("font-size",12)
  .style("text-anchor","middle")
  .append("textPath")
  .attr("xlink:href",function(d,i){return "#s"+i;})
  .attr("startOffset",function(d,i){return "50%";})
  .text(function(d){return d.label.toUpperCase();})

