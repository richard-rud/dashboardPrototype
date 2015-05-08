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
            ['Baseline Scenario: 2009 - 2011 avg. (Phosphorus)',7.9,0.2,4.4,5,7,1,4,8,1,12,5,0.8,1.7,0.02,3,4,2.6,1.9,3,0.1,0.8,0.4,0.05,0.4],
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
        pattern: ['#41ab5d','#238b45','#006d2c']
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
            ['x','Imported feed ingredients','Imported food','Plants for feed','Grazing','Plants for food','Manure','Animal products','Exported food','Processing waste','Secondary feed','Animal and plant products','Organic waste,','Wastewater','Exported waste','Waste to incineration/landfill','Secondary fertilizer','Waste to biogas','Rejects/loss','Biogas','Residuals','PE Fertilizer production','PE Plant production','PE Animal Husbandry','PE Food processing','PE Biogas Production'],
            ['Baseline Scenario: 2009 - 2011 (Energy)',10,22,17,40.5,4,26,11,7,1,0.5,13,8,3,3,6,1,0.9,0.00179,0.6,0.4,0.2,1,3,10,0.1,0.2,1,3,10,0.1],
            ['Scenario 1: Recycling food waste (Energy)',14,22,17,51,4,26,11,7,1,0.5,13,18,3,3,6,3,7,0.1,4,3,1,0.1,3,10,1,1,0.1,3,10,1],
            ['Scenario 2: Preventing food waste (Energy)',10,22,12,30,1,19,8,7,1,0.3,7,12,3,0.5,3,3,0.007,0.00001,0.001,0.005,0.1,0.8,2,9,0.001,0.1,0.8,2,9,0.001]
         
        ],
        type: 'bar',
        order: 'desc'
    },
    legend: {
        position: 'bottom'
    },
    color: {
        pattern: ['#fec44f','#fe9929','#ec7014']
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

