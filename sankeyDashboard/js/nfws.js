//The data used is from the baseline scenario

var chart = c3.generate({
    size: {
        height: 400,
        width: 1300
    },
    bindto: '#nfws',
    data: {
        x : 'x',
        columns: [
            ['x', 'Norwegian Food Waste System'],
            ['Imports',900],
            ['Exports',360],
            ['Domestic production',670],
            ['Avoidable food waste',179]
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
                format: function(d) { return d + ' (kt dm/yr)'; }, //Determine unit of measure 

            }
        },
    },
    color: {
        pattern: ['#8dd3c7','#ffffb3','#bebada','#fb8072']
    }
});


