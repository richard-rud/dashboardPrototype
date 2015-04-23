
    //////////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator for the biogas output in the food waste dashboard//
/////////////////////////////////////////////////////////////////////////////////////////////////

//The data used is from all of the three scenarios

var chart = c3.generate({
    size: {
        height: 400,
        width: 1400
    },
    bindto: '#BiogasOutputBars',
    data: {
        x : 'x',
        columns: [
            ['x', 'Biogas Output'],
            ['Scenario 0: 2009 - 2011: ',226800],
            ['Scenario 1: Recycling food waste',4554562],
            ['Scenario 2: Preventing food waste',113114]
        ],
        type: 'bar',
        order: 'none'
    },
    grid: {
        y: {
            show: true
        }
    },
    bar: {
        width: 40
    },
    axis: {
        rotated: true,
        x: {
            type: 'category'
        },
        y: {
            label: 'Amount',
            tick: {
                format: function(d) { return d + ' (GJ/yr)'; }, //Determine unit of measure 

            }
        },
    },
    color: {
        pattern: ['#fec44f', '#cc4c02', '#662506']
    }
});


