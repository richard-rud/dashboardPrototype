
    //////////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator stacked bar chart for dry matter, avoidable food waste//
/////////////////////////////////////////////////////////////////////////////////////////////////
var chart = c3.generate({
    size: {
        height: 600,
        width: 1000
    },
    bindto: '#AFWcomparison',
    data: {
        columns: [
            ['Avoidable food waste',33,1,29,120],
            ['Total food inputs',670,502,1000,900]
        ],
        type: 'bar',
        order: 'desc'
    },
    axis: {
        y: {
            label: 'Amount',
            tick: {
                format: function(d) { return d + ' (kt dm/yr)'; }, //Determine unit of measure 

            }
        },
        x: {
            type: 'category',
            categories: ['Food Processing', 'Wholesale', 'Retail', 'HC']
            
        },
    },
    grid: {
        y: {
            show: true
        }
    },
    color: {
        //pattern: ['#a6cee3', '#1f78b4', '#b2df8a','#33a02c','#fb9a99', '#e31a1c', '#fdbf6f','#ff7f00','#cab2d6']
        //pattern: ['#fff5eb','#fee6ce','#fdd0a2','#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704']
        pattern: ['#8dd3c7','#ffffb3']
    },
});



