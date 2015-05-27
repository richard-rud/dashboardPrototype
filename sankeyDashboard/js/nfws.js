//The data used is from the baseline scenario

var chart = c3.generate({
    size: {
        height: 400,
        width: 1300
    },
    bindto: '#nfws',
    data: {
        columns: [
            ['Imports',900],
            ['Domestic production',500],
            ['MBI',40],
            ['Exports',360],
            ['Human consumption',900],
            ['Avoidable food waste',180]
            
        ],
        type: 'bar',
        groups: [
            ['Imports','Domestic production','MBI'],
            ['Exports','Avoidable food waste','Human consumption']
        ],
        order: 'desc'
    },
    grid: {
        y: {
            show: true
        }
    },
    bar: {
        width: 200
    },
    axis: {
        rotated: true,
        x: {
            type: 'category',
            categories: ['Comparing production with consumption and losses']
            
        },
        y: {
            label: 'Amount',
            tick: {
                format: function(d) { return d + ' (kt dm/yr)'; }, //Determine unit of measure 

            }
        },
    },
    color: {
        pattern: ['#9e9ac8','#6a51a3','#3f007d','#fee391','#fe9929','#cc4c02','#662506']
    }
});


