//The data used is from the baseline scenario

var chart = c3.generate({
    size: {
        height: 400,
        width: 1300
    },
    bindto: '#wasteManagement',
    data: {
        x : 'x',
        columns: [
            ['x', 'Waste Management inputs'],
            ['Sewage sludge',90],
            ['Org. waste to incineration/landfill',160],
            ['Org. waste to agriculture',31],
            ['Org. waste to bioenergy',50]
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


