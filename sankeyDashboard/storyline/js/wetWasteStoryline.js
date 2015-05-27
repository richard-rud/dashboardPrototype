////////////////////////////////////////////////////////////////
//The following shows the chart generator for wet waste chart//
///////////////////////////////////////////////////////////////



var chart = c3.generate({
    size: {
        height: 400,
        width: 700
    },
    bindto: '#barChartWetWaste',
    data: {
        columns: [
            ['1995: Total wet organic waste', 1077000],
            ['2011: Total wet organic waste', 1452000]
        ],
        type: 'bar',
    },
    transition: {
        duration: 1000
    },
    color: {
        pattern: ['#4daf4a','#984ea3']
    },
    axis: {
        x: {
            show: false
            //type: 'category',
            //categories: ['1995']
        },
        y: {
            label: 'Amount',
            tick: {
                format: function(d) { return d + ' (ton)'; }, //Determine unit of measure 

            }
        },
    },
    tooltip: {
        format: {
            title: function (d) { return 'Usage of wet organic waste for energy'; }
        }
    },
    grid: {
        y: {
            show: true
        },
        x: {
            show: true
    }
}
});









