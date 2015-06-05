
///This uses energy demand data from 2010


var chart = c3.generate({
    size: {
        height: 400,
        width: 600
    },
    bindto: '#comparison1',
    data: {
        x : 'x',
        columns: [
            ['x', 'The energy perspective'],
            ['Norwegian energy demand for transportation',62],
            ['Biogas potential from recycling avoidable food waste',1.24]
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
                format: function(d) { return d + ' (TWh)'; }, //Determine unit of measure 

            }
        },
    },
    color: {
        pattern: ['#66c2a5','#fee08b']
    }
});

///This uses phosphorus data based on the baseline scenario 2009-2011 avg and s2- prevention scenario

var chart = c3.generate({
    size: {
        height: 400,
        width: 600
    },
    bindto: '#comparison2',
    data: {
        x : 'x',
        columns: [
            ['x', 'The phosphorus perspective'],
            ['Norwegian demand for mineral phosphorus',8],
            /*['Estimated demand for mineral phosphorus when preventing food waste',6.32]*/
            ['Potential savings mineral phosphorus',1.7]
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
                format: function(d) { return d + ' (kt P/yr)'; }, //Determine unit of measure 

            }
        },
    },
    color: {
        pattern: ['#66c2a5','#fee08b']
    }
});







