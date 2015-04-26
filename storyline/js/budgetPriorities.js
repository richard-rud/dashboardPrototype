    //////////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator stacked bar chart for dry matter, avoidable food waste//
/////////////////////////////////////////////////////////////////////////////////////////////////
var chart = c3.generate({
    size: {
        height: 400,
        width: 700
    },
    bindto: '#barChartBudget',
    data: {
        columns: [
            ['Biogas strategy', 10000000],
            ['Food waste prevention strategy', 700000]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 
        }
        
    },
    color: {
        pattern: ['#ffffff', '#969696']
    },
    axis: {
        x: {
            show: false
        },
        y: {
            show: true,
            tick: {
                format: function(d) { return d + ' (NOK)'; }, //Determine unit of measure 

            }
        }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Budget priorities'; }
        }
    },
    grid: {
        y: {
    show: true
  }
}
});

