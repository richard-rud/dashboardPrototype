var color = d3.scale.category20();


var dataset = [{label:"Current production", value:5},{label:"Realistic potential",value:23},{label:"Teoretical potential", value:58}];

/*
var arc = d3.svg.arc()
  .innerRadius(function(d,i){return (5-i)*35;})
  .outerRadius(function(d,i){return (5-i)*35+1;})
  .startAngle(0)
  .endAngle(2*Math.PI);
  */


  var arc = d3.svg.arc()
  //.innerRadius(function(d,i){return (4-i)*d.value*4;})
  .outerRadius(function(d,i){return (4-i)*d.value*2+4;})
  .startAngle(0)
  .endAngle(2*Math.PI);

var svg = d3.select("#biogasDiagram").append("svg")
  .attr("width", 1200)
  .attr("height", 800)
  .selectAll("g")
  .data(dataset)
  .enter()
  .append("g")
  .attr("transform", "translate(300,290)");

  var circle = svg.selectAll("circle").data([0, 1])
    .enter().append("circle")
    .attr("r", 46)
    .attr("cx", 0)
    .attr("cy", 0)
    .style("fill","white")
    .each(pulse);

var LineCircle = svg.append("g")
  .attr("id","LineCircle")
  .style("fill","black")
  .attr("class", "label")


var arcs = svg.append("path")
  .attr("stroke", "white")
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

  function pulse() {
            var circle = svg.select("circle");
            
                circle = circle.transition()
                    .duration(1000)
                    .attr("stroke-width", 20)
                    .attr("r", 20)
                    .transition()
                    .duration(5000)
                    .attr('stroke-width', 5)
                    .attr("r", 238)
                    .style("opacity", .2)
                    .style("fill", "orange")
                    .ease('sine');
            };