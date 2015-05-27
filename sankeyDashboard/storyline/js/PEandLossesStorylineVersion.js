
    //////////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator for the PE inputs needed for the baseline scenario//
/////////////////////////////////////////////////////////////////////////////////////////////////

//The data used is from the baseline scenario

var chart = c3.generate({
    size: {
        height: 400,
        width: 800
    },
    bindto: '#stackedBarPEuse',
    data: {
        x : 'x',
        columns: [
            ['x', 'Process energy inputs'],
            ['PE Fertilizer production',0.2],
            ['PE Plant production',1],
            ['PE Animal Husbandry',3],
            ['PE Food processing',10],
            ['PE Biogas Production',0.1],
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
        //pattern: ['#ffffff', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525']
        pattern: ['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00']

    }

});


