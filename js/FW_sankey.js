
//Tooltip for the processes
var tipProcess = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Process:</strong> <span style='color:orange'>" + d.p_name + "</span></br><strong>Stock: </strong>" + "<span style='color:orange'>" + d.p_stock + "</span>";
  })



//Tooltip for the flows s0
var tipFlow_s0 = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Process:</strong> <span style='color:orange'>" + d.f_name + "</span></br><strong>Type: </strong>" + "<span style='color:orange'>" + d.f_type + "</span></br><strong>Value: </strong>" + "<span style='color:orange'>" + d.value_s0 + "</span></br><strong>Scenario: </strong>" + "<span style='color:orange'>" + d.f_id + "</span>";
  })

//Canvas for rendering the sankey diagram//
var width = 1450,
    height = 700;

var svg = d3.select("#sankeyContent")
            .append("svg")
            .attr("width", width)
            .attr("height", height);  
          
svg.call(tipProcess);

svg.call(tipFlow_s0);

// The following variables create the processes in the sankey/mfa diagram, 7 in total

var processData = [

  {"p_id": "P1", "p_x1": 100, "p_y1": 60, "p_x2": 100, "p_y2": 400, "p_strokeWidth": 20, "p_stroke": "grey", "p_name": "Fertilizer Production", "p_stock": 0, "p_type": "Phosphorus"},

  {"p_id": "P2", "p_x1": 300, "p_y1": 60, "p_x2": 300, "p_y2": 650, "p_strokeWidth": 20, "p_stroke": "grey", "p_name": "Plant Production", "p_stock": 0, "p_type": "Phosphorus"},

  {"p_id": "P3", "p_x1": 500, "p_y1": 60, "p_x2": 500, "p_y2": 450, "p_strokeWidth": 20, "p_stroke": "grey", "p_name": "Animal Husbandry", "p_stock": 0, "p_type": "Phosphorus"},

  {"p_id": "P4", "p_x1": 700, "p_y1": 60, "p_x2": 700, "p_y2": 500, "p_strokeWidth": 20, "p_stroke": "grey", "p_name": "Food Processing", "p_stock": 0, "p_type": "Phosphorus"},

  {"p_id": "P5", "p_x1": 900, "p_y1": 60, "p_x2": 900, "p_y2": 400, "p_strokeWidth": 20, "p_stroke": "grey", "p_name": "Human Consumption", "p_stock": 0, "p_type": "Phosphorus"},

  {"p_id": "P6", "p_x1": 1100, "p_y1": 60, "p_x2": 1100, "p_y2": 550, "p_strokeWidth": 20, "p_stroke": "grey", "p_name": "Waste Management", "p_stock": 0, "p_type": "Phosphorus"},

  {"p_id": "P7", "p_x1": 1300, "p_y1": 60, "p_x2": 1300, "p_y2": 650, "p_strokeWidth": 20, "p_stroke": "grey", "p_name": "Biogas Production", "p_stock": 0, "p_type": "Phosphorus"}
];

//Creating the processes for the MFA diagram

var processes = svg.append("g").selectAll(".line")
                          .data(processData)
                          .enter()
                          .append("line");
                        
var mfaProcesses = processes
            .attr("id", function (d) { return d.p_id; })
            .attr("x1",function (d) { return d.p_x1; })
            .attr("y1",function (d) { return d.p_y1; })
            .attr("x2",function (d) { return d.p_x2; })
            .attr("y2",function (d) { return d.p_y2; })
            .attr("stroke-width", function (d) { return d.p_strokeWidth; })
            .attr("stroke", function (d) { return d.p_stroke; })
            .on('mouseover', tipProcess.show)
            .on('mouseout', tipProcess.hide);
            
//The following data renders the flows in the system

var linearFlowData_P = [
    
    {"f_id": "Flow1", "f_x1": 110, "f_y1": 300, "f_x2": 290, "f_y2": 300, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Mineral Fertilizer", "f_type": "Phosphorus", "strokeDasharray": "none", "value_s0":30, "value_s1":20, "value_s2":0, "flowDir":"linear"},

    {"f_id": "Flow2", "f_x1": 310, "f_y1": 300, "f_x2": 490, "f_y2": 300, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Plants for feed", "f_type": "Phosphorus", "strokeDasharray": "none", "value_s0":5, "value_s1":2, "value_s2":0, "flowDir":"linear"},
    
    {"f_id": "Flow3", "f_x1": 310, "f_y1": 250, "f_x2": 490, "f_y2": 250, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Grazing", "f_type": "Phosphorus", "strokeDasharray": "none", "value_s0":5, "value_s1":50, "value_s2":0, "flowDir":"linear"},

    {"f_id": "Flow4", "f_x1": 310, "f_y1": 470, "f_x2": 690, "f_y2": 470, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Plants for food", "f_type": "Phosphorus", "strokeDasharray": "none", "value_s0":5, "value_s1":4, "value_s2":0, "flowDir":"linear"},

    {"f_id": "Flow4", "f_x1": 310, "f_y1": 430, "f_x2": 490, "f_y2": 430, "f_strokeWidth": 5, "f_stroke": "blue", "f_name": "Manure", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2","value_s0":10, "value_s1":4, "value_s2":0, "flowDir":"loop"},

    {"f_id": "Flow5", "f_x1": 510, "f_y1": 300, "f_x2": 690, "f_y2": 300, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Animal products", "f_type": "Phosphorus", "strokeDasharray": "none","value_s0":20, "value_s1":5, "value_s2":0, "flowDir":"linear"},

    {"f_id": "Flow6", "f_x1": 710, "f_y1": 300, "f_x2": 890, "f_y2": 300, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Animal and plant products", "f_type": "Phosphorus", "strokeDasharray": "none","value_s0":5, "value_s1":0, "value_s2":0,"flowDir":"linear"},

    {"f_id": "Flow7", "f_x1": 510, "f_y1": 430, "f_x2": 690, "f_y2": 430, "f_strokeWidth": 5, "f_stroke": "blue", "f_name": "Secondary Feed", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2","value_s0":10, "value_s1":20, "value_s2":0,"flowDir":"loop"},

    {"f_id": "Flow8", "f_x1": 910, "f_y1": 150, "f_x2": 1090, "f_y2": 150, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Organic waste", "f_type": "Phosphorus", "strokeDasharray": "none","value_s0":5, "value_s1":20, "value_s2":0,"flowDir":"linear"},

    {"f_id": "Flow9", "f_x1": 910, "f_y1": 200, "f_x2": 1090, "f_y2": 200, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Wastewater", "f_type": "Phosphorus", "strokeDasharray": "none","value_s0":5, "value_s1":5, "value_s2":0,"flowDir":"linear"},

    {"f_id": "Flow10", "f_x1": 1110, "f_y1": 200, "f_x2": 1290, "f_y2": 200, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Waste to biofuel", "f_type": "Phosphorus", "strokeDasharray": "none","value_s0":5, "value_s1":5, "value_s2":0,"flowDir":"linear"},

    {"f_id": "Flow11", "f_x1": 310, "f_y1": 525, "f_x2": 1090, "f_y2": 525, "f_strokeWidth": 5, "f_stroke": "blue", "f_name": "Secondary Fertilizer", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2","value_s0":10, "value_s1":5, "value_s2":0,"flowDir":"loop"},

    {"f_id": "Flow12", "f_x1": 310, "f_y1": 600, "f_x2": 1290, "f_y2": 600, "f_strokeWidth": 5, "f_stroke": "blue", "f_name": "Residuals", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2","value_s0":50, "value_s1":10, "value_s2":0,"flowDir":"loop"},

    {"f_id": "Flow13", "f_x1": 0, "f_y1": 180, "f_x2": 90, "f_y2": 180, "f_strokeWidth": 200, "f_stroke": "green", "f_name": "Imported P", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":20, "value_s1":100, "value_s2":0,"flowDir":"input"},
  
    {"f_id": "Flow13", "f_x1": 150, "f_y1": 90, "f_x2": 290, "f_y2": 90, "f_strokeWidth": 10, "f_stroke": "green", "f_name": "Deposition", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":30, "value_s1":5, "value_s2":0,"flowDir":"input"},

    {"f_id": "Flow13", "f_x1": 350, "f_y1": 90, "f_x2": 490, "f_y2": 90, "f_strokeWidth": 10, "f_stroke": "green", "f_name": "Imp. Feed Ingredients", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":5, "value_s2":0,"flowDir":"input"},

    {"f_id": "Flow13", "f_x1": 750, "f_y1": 90, "f_x2": 890, "f_y2": 90, "f_strokeWidth": 10, "f_stroke": "green", "f_name": "Imp. food", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":5, "value_s2":0,"flowDir":"input"},

    {"f_id": "Flow13", "f_x1": 710, "f_y1": 340, "f_x2": 760, "f_y2": 340, "f_strokeWidth": 30, "f_stroke": "red", "f_name": "Exp. food", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":30, "value_s1":5, "value_s2":0,"flowDir":"output"},

    {"f_id": "Flow13", "f_x1": 710, "f_y1": 390, "f_x2": 760, "f_y2": 390, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "Processing waste", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":20, "value_s2":0,"flowDir":"output"},

    {"f_id": "Flow13", "f_x1": 310, "f_y1": 340, "f_x2": 360, "f_y2": 340, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "P accumulation", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":30, "value_s1":30, "value_s2":0,"flowDir":"output"},

    {"f_id": "Flow13", "f_x1": 310, "f_y1": 390, "f_x2": 360, "f_y2": 390, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "Runoff", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":20, "value_s2":0,"flowDir":"output"},

    {"f_id": "Flow13", "f_x1": 1110, "f_y1": 290, "f_x2": 1160, "f_y2": 290, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "Discharge", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":20, "value_s2":0,"flowDir":"output"},

    {"f_id": "Flow13", "f_x1": 1110, "f_y1": 390, "f_x2": 1160, "f_y2": 390, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "Waste to incineration/landfill", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":20, "value_s2":0,"flowDir":"output"},

    {"f_id": "Flow13", "f_x1": 1110, "f_y1": 490, "f_x2": 1160, "f_y2": 490, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "Exported Waste", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":20, "value_s2":0,"flowDir":"output"},

    {"f_id": "Flow13", "f_x1": 1310, "f_y1": 490, "f_x2": 1360, "f_y2": 490, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "Exp. Waste", "f_type": "Phosphorus", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":20, "value_s2":0,"flowDir":"output"}
    
];

var linearFlowData_E = [
    
    {"f_id": "Flow1", "f_x1": 110, "f_y1": 300, "f_x2": 290, "f_y2": 300, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Mineral Fertilizer", "f_type": "Energy", "strokeDasharray": "none", "value_s0":5, "value_s1":20, "value_s2":0},

    {"f_id": "Flow2", "f_x1": 310, "f_y1": 300, "f_x2": 490, "f_y2": 300, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Plants for feed", "f_type": "Energy", "strokeDasharray": "none", "value_s0":5, "value_s1":2, "value_s2":0},
    
    {"f_id": "Flow3", "f_x1": 310, "f_y1": 250, "f_x2": 490, "f_y2": 250, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Grazing", "f_type": "Energy", "strokeDasharray": "none", "value_s0":5, "value_s1":50, "value_s2":0},

    {"f_id": "Flow4", "f_x1": 310, "f_y1": 470, "f_x2": 690, "f_y2": 470, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Plants for food", "f_type": "Phosphorus", "strokeDasharray": "none", "value_s0":5, "value_s1":4, "value_s2":0},

    {"f_id": "Flow4", "f_x1": 310, "f_y1": 430, "f_x2": 490, "f_y2": 430, "f_strokeWidth": 5, "f_stroke": "blue", "f_name": "Manure", "f_type": "Energy", "strokeDasharray": "2,2,2,2","value_s0":5, "value_s1":4, "value_s2":0},

    {"f_id": "Flow5", "f_x1": 510, "f_y1": 300, "f_x2": 690, "f_y2": 300, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Animal products", "f_type": "Energy", "strokeDasharray": "none","value_s0":5, "value_s1":5, "value_s2":0},

    {"f_id": "Flow6", "f_x1": 710, "f_y1": 300, "f_x2": 890, "f_y2": 300, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Animal and plant products", "f_type": "Energy", "strokeDasharray": "none","value_s0":5, "value_s1":0, "value_s2":0},

    {"f_id": "Flow7", "f_x1": 510, "f_y1": 430, "f_x2": 690, "f_y2": 430, "f_strokeWidth": 5, "f_stroke": "blue", "f_name": "Secondary Feed", "f_type": "Energy", "strokeDasharray": "2,2,2,2","value_s0":5, "value_s1":20, "value_s2":0},

    {"f_id": "Flow8", "f_x1": 910, "f_y1": 150, "f_x2": 1090, "f_y2": 150, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Organic waste", "f_type": "Energy", "strokeDasharray": "none","value_s0":5, "value_s1":20, "value_s2":0},

    {"f_id": "Flow9", "f_x1": 910, "f_y1": 200, "f_x2": 1090, "f_y2": 200, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Wastewater", "f_type": "Energy", "strokeDasharray": "none","value_s0":5, "value_s1":5, "value_s2":0},

    {"f_id": "Flow10", "f_x1": 1110, "f_y1": 200, "f_x2": 1290, "f_y2": 200, "f_strokeWidth": 5, "f_stroke": "green", "f_name": "Waste to biofuel", "f_type": "Energy", "strokeDasharray": "none","value_s0":5, "value_s1":5, "value_s2":0},

    {"f_id": "Flow11", "f_x1": 310, "f_y1": 525, "f_x2": 1090, "f_y2": 525, "f_strokeWidth": 5, "f_stroke": "blue", "f_name": "Secondary Fertilizer", "f_type": "Energy", "strokeDasharray": "2,2,2,2","value_s0":5, "value_s1":5, "value_s2":0},

    {"f_id": "Flow12", "f_x1": 310, "f_y1": 600, "f_x2": 1290, "f_y2": 600, "f_strokeWidth": 5, "f_stroke": "blue", "f_name": "Residuals", "f_type": "Energy", "strokeDasharray": "2,2,2,2","value_s0":5, "value_s1":10, "value_s2":0},

    {"f_id": "Flow13", "f_x1": 0, "f_y1": 180, "f_x2": 90, "f_y2": 180, "f_strokeWidth": 200, "f_stroke": "green", "f_name": "Imported P", "f_type": "Energy", "strokeDasharray": "2,2,2,2", "value_s0":200, "value_s1":100, "value_s2":0},
    
    {"f_id": "Flow13", "f_x1": 150, "f_y1": 90, "f_x2": 290, "f_y2": 90, "f_strokeWidth": 10, "f_stroke": "green", "f_name": "Deposition", "f_type": "Energy", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":5, "value_s2":0},

    {"f_id": "Flow13", "f_x1": 350, "f_y1": 90, "f_x2": 490, "f_y2": 90, "f_strokeWidth": 10, "f_stroke": "green", "f_name": "Imp. Feed Ingredients", "f_type": "Energy", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":5, "value_s2":0},

    {"f_id": "Flow13", "f_x1": 750, "f_y1": 90, "f_x2": 890, "f_y2": 90, "f_strokeWidth": 10, "f_stroke": "green", "f_name": "Imp. food", "f_type": "Energy", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":5, "value_s2":0},

    {"f_id": "Flow13", "f_x1": 710, "f_y1": 340, "f_x2": 760, "f_y2": 340, "f_strokeWidth": 30, "f_stroke": "red", "f_name": "Exp. food", "f_type": "Energy", "strokeDasharray": "2,2,2,2", "value_s0":30, "value_s1":5, "value_s2":0},

    {"f_id": "Flow13", "f_x1": 710, "f_y1": 390, "f_x2": 760, "f_y2": 390, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "Processing waste", "f_type": "Energy", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":20, "value_s2":0},

    {"f_id": "Flow13", "f_x1": 310, "f_y1": 340, "f_x2": 360, "f_y2": 340, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "P accumulation", "f_type": "Energy", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":30, "value_s2":0},

    {"f_id": "Flow13", "f_x1": 310, "f_y1": 390, "f_x2": 360, "f_y2": 390, "f_strokeWidth": 10, "f_stroke": "red", "f_name": "Runoff", "f_type": "Energy", "strokeDasharray": "2,2,2,2", "value_s0":10, "value_s1":20, "value_s2":0}
    
];

//Creating a markers for the input, output and recycle flows

  svg.append('marker')   
     .attr('id', "input-arrow")
     .attr('markerHeight', 2.5)
     .attr('markerWidth', 2,5)
     .attr('orient', 'auto')
     .attr('refX', 0)
     //.attr('refX', function (d) {return d.f_x2 - 300;})
     .attr('refY', 0)
     //.attr('viewBox', '-5 -5 20 10')
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
     //.attr('d', 'M 0,0 m -5,-5 L 0,0 L -5,5 Z')
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
     //.attr('d', 'M 0,0 m -5,-5 L 0,0 L -5,5 Z')
     .attr('d', 'M -5,0 L -5,-5 L -5,0 L 0,5 L 0,-5')
     .style("opacity", 0.5)
     .style("fill", "blue");

//creating the lines for the linear flows in the MFA diagram

var linearFlows = svg.append("g").attr("class", "MFA_flows").selectAll(".line")
                          .data(linearFlowData_P)
                          .enter()
                          .append("line")
                          .on("click", function(d) {
                          //return console.log(d.value_s0, d.value_s1, d.value_s2);
                          return document.getElementById("myDialog").showModal(); 
                          });
                          
var mfaFlowsLinear = linearFlows
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
            .on('mouseover', tipFlow_s0.show)
            .on('mouseout', tipFlow_s0.hide);
            
//Adding text to the MFA diagram

//Text for the processes

svg.selectAll("text.process")
        .data(processData)
        .enter()
        .append("text")
        .attr("id", "processText")
        .attr("x", function(d) { return d.p_x1 - 70; })
        .attr("y", function(d) { return d.p_y1 - 10; })
        .text(function(d) { return d.p_name; });

//Text for the flows

var flowText = svg.selectAll("text.flow")
        .data(linearFlowData_P)
        .enter()
        .append("text")
        .attr("id", function(d) { return d.f_id; })
        .attr("x", function(d) { return d.f_x1 + 5; })
        .attr("y", function(d) { return d.f_y1 - (d.value_s0/2); })
        .text(function(d) { return d.f_name; });
       
// On button click show s1 for phosphorus

d3.select("#s1_p").on("click", function() {
     
     /*
    mfaFlowsLinear
            .transition()
            .duration(3000)
            .attr("id", function (d) { return d.f_id })
            .attr("x1", function (d) { return d.f_x1 })
            .attr("y1", function (d) { return d.f_y1 })
            .attr("x2", function (d) { return d.f_x2 })
            .attr("y2", function (d) { return d.f_y2 })
            .attr("stroke-width", function (d) { return d.value_s1 })
            .attr("stroke", function (d) { return d.f_stroke })
            .attr("stroke-dasharray", function (d) { return d.strokeDasharray });
            */

    mfaFlowsLinear
          .transition()
          .duration(3000)
          .attr("id", function (d) { return d.f_id })
          .attr("x1", function (d) { 
              if(d.flowDir == "loop")
              {
                return d.f_x1 + (d.value_s1/2);
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
                return d.f_x2 - (d.value_s1/2)
              } 
            })
            .attr("y2", function (d) { return d.f_y2 })
            .attr("stroke-width", function (d) { return d.value_s1 })
            .attr("stroke", function (d) { return d.f_stroke })
            .attr("stroke-dasharray", function (d) { return d.strokeDasharray });

            
   flowText
        .transition()
        .duration(3000)
        .attr("x", function(d) { return d.f_x1 + 5; })
        .attr("y", function(d) { return d.f_y1 - (d.value_s1/2); })
        .text(function(d) { return d.f_name; });
  });

// On button click show s2 for phosphorus

d3.select("#s2_p").on("click", function() {


     
    mfaFlowsLinear
          .transition()
          .duration(3000)
          .attr("id", function (d) { return d.f_id })
          .attr("x1", function (d) { 
              if(d.flowDir == "loop")
              {
                return d.f_x1 + (d.value_s2/2);
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
                return d.f_x2 - (d.value_s2/2)
              } 
            })
            .attr("y2", function (d) { return d.f_y2 })
            .attr("stroke-width", function (d) { return d.value_s2 })
            .attr("stroke", function (d) { return d.f_stroke })
            .attr("stroke-dasharray", function (d) { return d.strokeDasharray });

   flowText
        .transition()
        .duration(3000)
        .attr("x", function(d) { return d.f_x1 + 5; })
        .attr("y", function(d) { return d.f_y1 - (d.value_s2/2); })
        .text(function(d) { return d.f_name; });

  });

// On button click show s1 for energy

// On button click show s2 for energy
