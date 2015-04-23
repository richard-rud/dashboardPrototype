
    //////////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator for the PE inputs needed for the baseline scenario//
/////////////////////////////////////////////////////////////////////////////////////////////////

//The data used is from the baseline scenario

var chart = c3.generate({
    size: {
        height: 400,
        width: 1400
    },
    bindto: '#stackedBarPEuse',
    data: {
        x : 'x',
        columns: [
            ['x', 'Process energy inputs'],
            ['PE Phosphate mining',99700],
            ['PE Fertilizer production',52600],
            ['PE Plant production',960000],
            ['PE Animal Husbandry',2995000],
            ['PE Food processing',10000000],
            ['PE Biogas Production',7130],
            ['PE Mineral fertilizer',7130]
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
        pattern: ['#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506']
    }
});


