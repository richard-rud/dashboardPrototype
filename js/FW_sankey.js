//This (x) defines which scenario we are on
var scenarioVariable = 0;

var tipFlow = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
            if ( scenarioVariable == 0) 
                {
                   return "<strong>Process:</strong> <span style='color:orange'>" + d.f_name + "</span></br><strong>Type: </strong>" + "<span style='color:orange'>" + d.f_type + "</span></br><strong>Value: </strong>" + "<span style='color:orange'>" + d.value_s0 + "</span></br><strong>Scenario: </strong>" + "<span style='color:orange'>" + "S0: Baseline" + "</span>";
                }
            if ( scenarioVariable == 1) 
                {
                   return "<strong>Process:</strong> <span style='color:orange'>" + d.f_name + "</span></br><strong>Type: </strong>" + "<span style='color:orange'>" + d.f_type + "</span></br><strong>Value: </strong>" + "<span style='color:orange'>" + d.value_s1 + "</span></br><strong>Scenario: </strong>" + "<span style='color:orange'>" + "S1: Recycling for biogas" + "</span>";
                }
            if (scenarioVariable == 2)
              {
                 return "<strong>Process:</strong> <span style='color:orange'>" + d.f_name + "</span></br><strong>Type: </strong>" + "<span style='color:orange'>" + d.f_type + "</span></br><strong>Value: </strong>" + "<span style='color:orange'>" + d.value_s2 + "</span></br><strong>Scenario: </strong>" + "<span style='color:orange'>" + "S2: Preventing food waste" + "</span>";
              }
  })

var tipFlow_s1 = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Process:</strong> <span style='color:orange'>" + d.f_name + "</span></br><strong>Type: </strong>" + "<span style='color:orange'>" + d.f_type + "</span></br><strong>Value: </strong>" + "<span style='color:orange'>" + d.value_s1 + "</span></br><strong>Test: </strong>" + "<span style='color:orange'>" + d.f_id + "</span>";
  })

var tipFlow_s2 = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Process:</strong> <span style='color:orange'>" + d.f_name + "</span></br><strong>Type: </strong>" + "<span style='color:orange'>" + d.f_type + "</span></br><strong>Value: </strong>" + "<span style='color:orange'>" + d.value_s1 + "</span></br><strong>Scenario: </strong>" + "<span style='color:orange'>" + d.f_id + "</span>";
  })
          
var width = 1450,
    height = 700;

var svg = d3.select("#sankeyContent_P")
            .append("svg")
            .attr("width", width)
            .attr("height", height);  

svg.call(tipFlow_s2);

function readFile(file) {

d3.json(file, function(graph) {

var processes = svg.append("g").selectAll(".line")
                          .data(graph.processes)
                          .enter()
                          .append("line");
                        
var mfaProcesses = processes
            .attr("id", function (d) { return d.p_id; })
            .attr("x1",function (d) { return d.p_x1; })
            .attr("y1",function (d) { return d.p_y1; })
            .attr("x2",function (d) { return d.p_x2; })
            .attr("y2",function (d) { return d.p_y2; })
            .attr("stroke-width", function (d) { return d.p_strokeWidth; })
            .attr("stroke", function (d) { return d.p_stroke; });
            //.on('mouseover', tipProcess.show)
            //.on('mouseout', tipProcess.hide);
            
  svg.append('marker')   
     .attr('id', "input-arrow")
     .attr('markerHeight', 2.5)
     .attr('markerWidth', 2,5)
     .attr('orient', 'auto')
     .attr('refX', 0)
     .attr('refY', 0)
     .attr('viewBox', '-5 -5 20 10')
     .append('path')
     .attr('d', 'M 5,0 m -5,-5 L 5,0 L 0,5 Z')
     .style("opacity", 0.5)
     .style("fill", "green");

  svg.append('marker')
     .attr('id', "output-arrow")
     .attr('markerHeight', 2.5)
     .attr('markerWidth', 2,5)
     .attr('orient', 'auto')
     .attr('refX', 0)
     .attr('refY', 0)
     .attr('viewBox', '-5 -5 20 10')
     .append('path')
     .attr('d', 'M 5,0 m -5,-5 L 5,0 L 0,5 Z')
     .style("opacity", 0.5)
     .style("fill", "red");

  svg.append('marker')
     .attr('id', "loop-arrow")
     .attr('markerHeight', 2.5)
     .attr('markerWidth', 2,5)
     .attr('orient', 'auto')
     .attr('refX', 0)
     .attr('refY', 0)
     .attr('viewBox', '-5 -5 20 10')
     .append('path')
     .attr('d', 'M -5,0 L -5,-5 L -5,0 L 0,5 L 0,-5')
     .style("opacity", 0.5)
     .style("fill", "blue");

var linearFlows = svg.append("g").attr("class", "MFA_flows").selectAll(".line")
            .data(graph.flows)
            .enter()
            .append("line");
            //.on("click", function(d) {
            //    return document.getElementById("myDialog").showModal(); 
            //});

var mfaFlows = linearFlows
            .attr("id", function (d) { return d.f_id })
            .attr("x1", function (d) { 
              if(d.flowDir == "loop")
              {
                return d.f_x1 + (d.value_s0/2);
              }
              else {
                return d.f_x1;
              } 
            })
            .attr("y1", function (d) { return d.f_y1 })
            .attr("x2", function (d) { 
            if(d.flowDir == "loop")
              {
                return d.f_x2;
              }
              else {
                return d.f_x2 - (d.value_s0/2)
              } 
            })
            .attr("y2", function (d) { return d.f_y2 })
            .attr("stroke-width", function (d) { return d.value_s0 })
            .attr("stroke", function (d) { return d.f_stroke })
            .attr("stroke-dasharray", function (d) { return d.strokeDasharray })
            .attr("marker-start", function (d) {
              if (d.flowDir == "loop") 
                {
                  return "url(#loop-arrow)";
                }
              })
            .attr("marker-end", function (d) { 
              if (d.flowDir == "output") 
                {
                  return "url(#output-arrow)";
                }
              if (d.flowDir == "input") 
                {
                  return "url(#input-arrow)";
                }
              if (d.flowDir == "linear")
              {
                return "url(#input-arrow)"; 
              }
              
            })
            .call(tipFlow)
            .on('mouseover', tipFlow.show)
            .on('mouseout', tipFlow.hide);
            
svg.selectAll("text.process")
        .data(graph.processes)
        .enter()
        .append("text")
        .attr("id", "processText")
        .attr("x", function(d) { return d.p_x1 - 70; })
        .attr("y", function(d) { return d.p_y1 - 10; })
        .text(function(d) { return d.p_name; });

var flowText = svg.selectAll("text.flow")
        .data(graph.flows)
        .enter()
        .append("text")
        .attr("id", function(d) { return d.f_id; })
        .attr("x", function(d) { return d.f_x1 + 5; })
        .attr("y", function(d) { return d.f_y1 - (d.value_s0/2); })
        .text(function(d) { return d.f_name; });
       
d3.select("#s1_p").on("click", function() {

scenarioVariable = 1;

    mfaFlows
          .data(graph.flows) 
          .transition()
          .duration(3000)
          .attr("id", function (d) { return d.f_id })
          .attr("x1", function (d) { 
              if(d.flowDir == "loop")
              {
                return d.f_x1 + ((d.value_s1 * 10)/2);
              }
              else {
                return d.f_x1;
              } 
            })
            .attr("y1", function (d) { return d.f_y1 })
            .attr("x2", function (d) { 
            if(d.flowDir == "loop")
              {
                return d.f_x2;
              }
              else {
                return d.f_x2 - ((d.value_s1 * 10)/2)
              } 
            })
            .attr("y2", function (d) { return d.f_y2 })
            .attr("stroke-width", function (d) { return (d.value_s1 * 10) })
            .attr("stroke", function (d) { return d.f_stroke })
            .attr("stroke-dasharray", function (d) { return d.strokeDasharray });
       
  flowText
        .transition()
        .duration(3000)
        .attr("x", function(d) { return d.f_x1 + 5; })
        .attr("y", function(d) { return d.f_y1 - ((d.value_s1 * 10)/2); })
        .text(function(d) { return d.f_name; });

  });

d3.select("#s2_p").on("click", function() {

scenarioVariable = 2;

    mfaFlows
          .transition()
          .duration(3000)
          .attr("id", function (d) { return d.f_id })
          .attr("x1", function (d) { 
              if(d.flowDir == "loop")
              {
                return d.f_x1 + ((d.value_s2 * 5)/2);
              }
              else {
                return d.f_x1;
              } 
            })
            .attr("y1", function (d) { return d.f_y1 })
            .attr("x2", function (d) { 
            if(d.flowDir == "loop")
              {
                return d.f_x2;
              }
              else {
                return d.f_x2 - ((d.value_s2 * 5)/2)
              } 
            })
            .attr("y2", function (d) { return d.f_y2 })
            .attr("stroke-width", function (d) { return (d.value_s2 * 5)})
            .attr("stroke", function (d) { return d.f_stroke })
            .attr("stroke-dasharray", function (d) { return d.strokeDasharray });

   flowText
        .transition()
        .duration(3000)
        .attr("x", function(d) { return d.f_x1 + 5; })
        .attr("y", function(d) { return d.f_y1 - ((d.value_s2 * 5)/2); })
        .text(function(d) { return d.f_name; });

  });

});

};

var jsonFile1 = "data/dataPhosphorus.json" 

  readFile(jsonFile1);













