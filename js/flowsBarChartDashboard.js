
//////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator for the energy layer with scenario 0, 1, 2//
//////////////////////////////////////////////////////////////////////////////////////

var chartEnergy = c3.generate({
    size: {
        height: 2500,
        width: 600
    },
    bindto: '#barChartEnergy',
    data: 
    {
        x : 'x',
        //All the following data in this script is taken for energy (green column)
        columns: [
            ['x','Imported feed ingredients','Imported food','Plants for feed','Grazing','Plants for food','Manure','Animal products','Exported food','Processing waste','Secondary feed','Animal and plant products','Organic waste,','Wastewater','Exported waste','Waste to incineration/landfill','Secondary fertilizer','Waste to biogas','Rejects/loss','Biogas','Residuals' ],
            ['Baseline Scenario: 2009 - 2011 (Energy)',10.3,22.3,16.9,40.5,4.3,26.4,10.9,7.2,0.5,0.5,13.2,7.8,2.9,2.6,6.2,0.6,0.9,0.00179,0.6,0.4,0.2,1,3,10,0.1],
            ['Scenario 1: Recycling food waste (Energy)',14,22,17,51,4,26,11,7,1,0.5,13,18,3,3,6,3,7,0.1,4,3,1,0.1,3,10,1],
            ['Scenario 2: Preventing food waste (Energy)',10,22,12,30,1,19,8,7,1,0.3,7,12,3,0.5,3,3,0.007,0.00001,0.001,0.005,0.1,0.8,2,9,0.001]
        ],
        type: 'bar',
        order: 'desc'
    },
    legend: {
        position: 'bottom'
    },
    color: {
        pattern: ['#cc4c02', '#993404', '#662506']
    },
     bar: {
        width: {
            ratio: 0.8 
        }
       
    },
    axis: {
        rotated: true,
        
        x: {
            type: 'category'
        },
        y: {
            show: false,
            tick: {
                format: function(d) { return d + ' (pj/yr)'; }, //Determine unit of measure 

            }
        }
    },

});

///////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator for the phosphorus layer with scenario 0, 1, 2//
/////////////////////////////////////////////////////////////////////////////////////////
    

var chartPhosphorus = c3.generate({
    size: {
        height: 2500,
        width: 600
    },
    bindto: '#barChartPhosphorus',
    data: 
    {
        x : 'x',
        //All the following data in this script is taken for energy (green column)
        columns: [
            ['x','Imported P','Deposition','Imported feed ingredients','Imported food','P accumulation (NAS)','Runoff','Plants for feed','Grazing','Plants for food','Manure','Animal products','Exported food','Processing waste','Secondary feed','Animal and plant products','Organic waste','Wastewater','Exported waste','Waste to incineration/landfill','Discharge','Secondary fertilizer','Waste to biogas','Rejects/loss','Residuals'],
            ['Baseline Scenario: 2009 - 2011 (Phosphorus)',7.9,0.2,4.4,4.9,7.1,1.2,4.2,7.8,0.9,12.1,4.8,0.8,1.7,0.02,3.4,4,2.6,1.9,2.7,0.1,0.8,0.4,0.05,0.4],
            ['Scenario 1: Recycling food waste (Phosphorus)',7,0.2,6,5,6,1,4,8,1,12,5,0.8,2,0.03,3,3.5,3,1,3,0.1,0.8,1.2,0.1,1],
            ['Scenario 2: Preventing food waste (Phosphorus)',6,0.2,5.5,5,5,1,4,8,0.5,11,4,0.8,2,0.02,2,3,3,1,2,0.1,0.7,0.3,0.03,0.3],
        ],
        type: 'bar',
        order: 'desc'
    },
    legend: {
        position: 'bottom'
    },
    color: {
        pattern: ['#88419d', '#810f7c', '#4d004b']
    },
     bar: {
        width: {
            ratio: 0.8 
        }
       
    },
    axis: {
        rotated: true,
        
        x: {
            type: 'category'
        },
        y: {
            show: false,
            tick: {
                format: function(d) { return d + ' (kton P/yr)'; }, //Determine unit of measure 

            }
        }
    },

});

/*

///////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator for the dry matter layer with scenario 0, 1, 2//
/////////////////////////////////////////////////////////////////////////////////////////

var chartDryMatter = c3.generate({
    size: {
        height: 2500,
        width: 400
    },
    bindto: '#barChartDryMatter',
    data: 
    {
        x : 'x',
        //All the following data in this script is taken for energy (green column)
        columns: [
            ['x','Fish silage and meal','Imported feed ingredients','Domestic chemical feed ingredients','Imported food','Imported phosphates','Produced plants','Grazing','Seeds and planting potatoes','Plants for feed','Plants for human consumption','Manure','Animal products','Feed','Secondary products for feed','Norwegian food products','Food processing waste','Avoidable food waste FP','Exported food products','Food to retail','Avoidable wholesale food waste','Food sold/service','Avoidable retail food waste','Avoidable HH food waste','HH/service organic waste','Waste water','Exported organic waste','Exported sewage sludge','SS for incineration/landfill/fertilizer','Exported organic waste','Secondary fertilizer waste','Organic waste for bioenergy','Waste for incineration/construction/landfill','Residuals for fertilizer','Biogas'],
            ['Baseline Scenario: 2009 - 2011',]
        ],
        type: 'bar',
        order: 'desc'
    },
    legend: {
        position: 'bottom'
    },
    color: {
        pattern: ['#238b45', '#006d2c', '#00441b']
    },
     bar: {
        width: {
            ratio: 0.8 
        }
       
    },
    axis: {
        rotated: true,
        
        x: {
            type: 'category'
        },
        y: {
            show: false,
            tick: {
                format: function(d) { return d + ' (ton)'; }, //Determine unit of measure 

            }
        }
    },

    


});

*/