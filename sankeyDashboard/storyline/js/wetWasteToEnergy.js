///////////////////////////////////////////////////////////////////////////
//The following shows the chart generator for wet waste energy use chart//
/////////////////////////////////////////////////////////////////////////

var chart = c3.generate({
    size: {
        height: 400,
        width: 700
    },
    bindto: '#barChartWetWasteEnergy',
    data: {
        columns: [
            ['1995: wet organic waste used for energy', 150000000],
            ['2011: wet organic waste used for energy', 675000000]
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
            label: 'tons' 
        }
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









