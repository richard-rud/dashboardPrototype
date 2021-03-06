
//////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator for the energy layer with scenario 0, 1, 2//
//////////////////////////////////////////////////////////////////////////////////////

var chartEnergy = c3.generate({
    size: {
        height: 2500,
        width: 400
    },
    bindto: '#barChartEnergy',
    data: 
    {
        x : 'x',
        //All the following data in this script is taken for energy (green column)
        columns: [
            ['x','Fish silage and meal','Imported feed ingredients','Domestic chemical feed ingredients','Imported food','Imported phosphates','Exported fertilizer','Mineral fertilizer','Produced plants','Grazing','Seeds and planting potatoes','Plants for feed','Plants for human consumption','Manure','Animal products','Feed','Secondary products for feed','Norwegian food products','Food processing waste','Avoidable food waste FP','Exported food products','Food to retail','Avoidable wholesale food waste','Food sold/service','Avoidable retail food waste','Avoidable HH food waste','HH/service organic waste','Waste water','Organic waste','Exported sewage sludge','SS for incineration/landfill/fertilizer','Exported organic waste','Secondary fertilizer waste','Organic waste for bioenergy','Waste for incineration/construction/landfill','Residuals for fertilizer','Biogas','PE for fertilizer production (natural gas and electricity)','Inputs to plants','PE for plant production','PE for animal husbandry','PE for feed production','PE Meat processing','PE Fruit and vegetable processing','PE animal and vegetable fat production','PE Dairy product manufacturing','PE Starch product manufacturing','PE Bakery product manufacturing','PE Beverage and other food products production','PE Biogas'],
            ['Scenario 0: 2009 - 2011',375977533333,10271867310000,3372072054666,22288816173058,637440300000,1101395166666,99689333333,20641572795344,40499475620833,132217527833,16860910588000,4304459608622,26449371293575,10901154906945,29117055459001,454894988668,13210003618934,982461344331,618084073333,7197383597542,28282190997617,19245196833,14881342922210,492360479000,5331831467000,11787395058666,2872454733333,5009300744331,506504166666,2365950566666,2075645525000,2584265729328,936282961846,3854702619822,0,226800000000,518115862559,0,960292716847,0,2953200000000,2324400000000,870000000000,1064400000000,2232000000000,438000000000,1347600000000,1964400000000,7134041349],
            ['Scenario 1: Recycling food waste',375977533333,10271867310000,3372072054666,22288816173058,637440300000,1101395166666,99689333333,20641572795344,40499475620833,132217527833,16860910588000,4304459608622,26449371293575,10901154906945,29117055459001,454894988668,13210003618934,982461344331,618084073333,7197383597542,28282190997617,19245196833,14881342922210,492360479000,5331831467000,11787395058666,2872454733333,13550821960498,506504166666,2365950566666,2075645525000,2584265729328,7397804178013,3854702619822,0,4554562500000,518115862559,0,960292716847,0,2953200000000,2324400000000,870000000000,1064400000000,2232000000000,438000000000,1347600000000,1964400000000,1494808164021],
            ['Scenario 2: Preventing food waste',375977533333,6274507365406,3372072054666,22288816173058,637440300000,1101395166666,60276568717,12480805512861,28952261553761,132217527833,12053526271516,951076642622,18908124213594,7793016656778,20182611498566,325195289310,6748482402768,982461344331,0,7197383597542,28282190997617,0,14881342922210,0,0,11787395058666,2872454733333,5009300744331,506504166666,2365950566666,17136680381,2584265729328,7730020213,380243189908,0,113113558879,518115862559,0,804285746304,0,2111183355089,1661666866643,728661778860,1064400000000,2232000000000,438000000000,1347600000000,1964400000000,7134041349],
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
                format: function(d) { return d + ' (kj/yr)'; }, //Determine unit of measure 

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
        width: 400
    },
    bindto: '#barChartPhosphorus',
    data: 
    {
        x : 'x',
        //All the following data in this script is taken for energy (green column)
        columns: [
            ['x','Fish silage and meal','Imported feed ingredients','Domestic chemical feed ingredients','Imported food','Imported phosphates','Deposition','Exported fertilizer','Mineral fertilizer','Produced plants','Grazing','Seeds and planting potatoes','Plants for feed','Plants for human consumption','Manure','Animal products','Feed','Secondary products for feed','Norwegian food products','Food processing waste','Avoidable food waste FP','Exported food products','Food to retail','Avoidable wholesale food waste','Food sold/service','Avoidable retail food waste','Avoidable HH food waste','HH/service organic waste','Waste water','Exported organic waste','Exported sewage sludge','Discharge','SS for incineration/landfill/fertilizer','Exported organic waste','Secondary fertilizer waste','Organic waste for bioenergy','Waste for incineration/construction/landfill','Residuals for fertilizer'],
            ['Scenario 0: 2009 - 2011',733,4405,1124,4900,94203,160,85823,7880,5118,7826,254,4236,882,12111,4757,9397,22,2572,1765,111,752,6716,4,3901,114,509,3439,2621,5399,329,131,1537,1611,769,415,2658,415],
            ['Scenario 1: Recycling food waste',733,4405,1124,4900,94203,160,85823,7142,5118,7826,254,4236,882,12111,4757,9397,22,2572,1765,111,752,6716,4,3901,114,509,3439,2621,5399,329,131,1537,1611,1507,1153,2658,1153],
            ['Scenario 2: Preventing food waste',726,3654,1124,4900,92577,160,85823,6254,4393,7826,254,3883,511,10477,4391,8991,22,1835,1765,0,752,6716,0,3901,0,0,2702,2621,4662,329,131,1537,1344,701,346,2256,346],
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
                format: function(d) { return d + ' (ton)'; }, //Determine unit of measure 

            }
        }
    },

});

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
            ['Scenario 0: 2009 - 2011',13952,529966,256679,895701,0,1125352,2419748,7642,908824,239657,1662577,431724,1520393,25820,604125,55333,33140,363923,1107196,28706,896352,28706,117067,439837,111768,245689,19708,92060,113327,123223,50381,177659,44117,6264],
            ['Scenario 1: Recycling food waste',],
            ['Scenario 2: Preventing food waste',],
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